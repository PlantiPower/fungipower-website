from pdfminer.high_level import extract_text
import sys

try:
    text = extract_text(sys.argv[1])
    print(text)
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
