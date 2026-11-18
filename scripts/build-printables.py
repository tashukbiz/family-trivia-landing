"""Rebuild the take-along PDFs from the article question banks (requires reportlab)."""
import json
from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import simpleSplit
from reportlab.pdfgen.canvas import Canvas

ROOT = Path(__file__).resolve().parents[1]
PAPER = ROOT / "public" / "printables"
ROUNDS = {
    "christmas": ("Christmas trivia for kids", "Christmas"),
    "animals": ("Animal trivia for kids", "animals"),
    "family-game-night": ("Family game night", "your favourite topics"),
    "road-trip": ("Road trip trivia", "places and travel"),
}
WIDTH, HEIGHT = letter
MARGIN = 42
INK = colors.HexColor("#142641")
BLUE = colors.HexColor("#24528a")
RULE = colors.HexColor("#aab5c0")
APP = "https://familytrivia.app/#download"


def header(canvas, title, key):
    canvas.setFillColor(BLUE)
    canvas.setFont("Helvetica-Bold", 11)
    canvas.drawString(MARGIN, HEIGHT - 46, "FAMILY TRIVIA")
    canvas.drawRightString(WIDTH - MARGIN, HEIGHT - 46, "HOST KEY  /  2" if key else "PLAYER SHEET  /  1")
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 26)
    canvas.drawString(MARGIN, HEIGHT - 88, title)
    canvas.setFont("Helvetica", 12)
    line = "Keep this page with the host. Give one point per correct answer." if key else "Read the questions aloud or write your answers on the lines."
    canvas.drawString(MARGIN, HEIGHT - 110, line)


def footer(canvas, topic):
    canvas.setStrokeColor(RULE)
    canvas.line(MARGIN, 106, WIDTH - MARGIN, 106)
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 13)
    canvas.drawString(MARGIN, 84, "Play the next round on one phone")
    canvas.setFont("Helvetica", 10)
    canvas.drawString(MARGIN, 68, f"Choose {topic} in Family Trivia. Each player picks a difficulty.")
    canvas.drawString(MARGIN, 53, "Internet required. Free to download, with in-app subscriptions.")
    canvas.setFillColor(BLUE)
    canvas.setFont("Helvetica-Bold", 11)
    canvas.drawString(MARGIN, 36, "familytrivia.app")
    qr = QrCodeWidget(APP, barWidth=58, barHeight=58)
    drawing = Drawing(58, 58)
    drawing.add(qr)
    renderPDF.draw(drawing, canvas, WIDTH - MARGIN - 58, 34)
    canvas.linkURL(APP, (MARGIN, 32, MARGIN + 90, 50), relative=0)
    canvas.linkURL(APP, (WIDTH - MARGIN - 58, 34, WIDTH - MARGIN, 92), relative=0)


def write_sheet(slug, title, topic):
    groups = json.loads((ROOT / "lib" / "rounds" / f"{slug}.json").read_text())
    questions = [item for group in groups for item in group["questions"] if item.get("sheet")]
    if len(questions) != 10:
        raise ValueError(f"{slug} must have ten questions in the printable round")
    canvas = Canvas(str(PAPER / f"{slug}.pdf"), pagesize=letter, invariant=1)
    canvas.setTitle(title + " | Questions and host answer key")
    canvas.setAuthor("Family Trivia")
    for key in (False, True):
        header(canvas, title, key)
        top = HEIGHT - 151
        x = MARGIN + 30
        for number, item in enumerate(questions, 1):
            canvas.setFillColor(BLUE)
            canvas.setFont("Helvetica-Bold", 13)
            canvas.drawString(MARGIN, top, str(number))
            canvas.setFillColor(INK)
            y = top
            blocks = [(item["q"], "Helvetica-Bold" if key else "Helvetica", 10.5 if key else 12)]
            if key:
                blocks.append((item["a"], "Helvetica", 11))
            for content, face, size in blocks:
                canvas.setFont(face, size)
                for line in simpleSplit(content, face, size, WIDTH - MARGIN - x):
                    canvas.drawString(x, y, line)
                    y -= 14
            if not key:
                canvas.setStrokeColor(RULE)
                canvas.line(x, y - 8, WIDTH - MARGIN, y - 8)
                y -= 9
            top = min(top - 52, y - 11)
            if y < 115:
                raise ValueError(f"{slug} overflows the sheet on item {number}")
        footer(canvas, topic)
        canvas.showPage()
    canvas.save()


if __name__ == "__main__":
    PAPER.mkdir(parents=True, exist_ok=True)
    for slug, (title, topic) in ROUNDS.items():
        write_sheet(slug, title, topic)
