import sys, os, json
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', '..'))

data_path = r"d:\Lập trình\Chatbot_tuyen_truyen\backend\app\data\bo-cau-hoi-phap-luat-5000.jsonl"

print("=== Checking JSONL format ===")
records_ok = 0
with open(data_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
            if i == 0:
                print(f"Sample keys: {list(obj.keys())}")
                print(f"Sample data: {str(obj)[:300]}")
            records_ok += 1
        except json.JSONDecodeError as e:
            if i < 5:
                print(f"Line {i} JSON error: {e}")
                print(f"  Raw: {repr(line[:100])}")

print(f"\nTotal valid JSON records: {records_ok}")

# Check which keys have question/answer
if records_ok > 0:
    with open(data_path, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            obj = json.loads(line.strip())
            keys = list(obj.keys())
            print(f"Keys: {keys}")
            break
