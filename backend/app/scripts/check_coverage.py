import json
import urllib.request
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('backend/app/data/test_1000_questions.json', encoding='utf-8') as f:
    questions = json.load(f)

# Take 1 question from each of the 30 categories
sample_30 = []
seen = set()
for q in questions:
    cat = q['category']
    if cat not in seen:
        seen.add(cat)
        sample_30.append(q)

print(f"Testing 1 question from each of the {len(sample_30)} categories...")
generic_count = 0
for idx, item in enumerate(sample_30, 1):
    req_data = json.dumps({'query': item['question'], 'session_id': f'cat_test_{idx}'}).encode('utf-8')
    req = urllib.request.Request('http://localhost:8000/api/chat/query', data=req_data, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            ans = data.get('answer', '')
            is_generic = 'Trợ lý số Công an xã Đức Hợp đã ghi nhận câu hỏi' in ans
            cat_name = item['category']
            if is_generic:
                generic_count += 1
                print(f"[{idx:02d}] {cat_name}: ⚠️ GENERIC FALLBACK (Question: {item['question'][:50]}...)")
            else:
                lines = [l.strip() for l in ans.split('\n') if l.strip()]
                preview = lines[1] if len(lines) > 1 else ans[:60]
                print(f"[{idx:02d}] {cat_name}: ✅ OK -> {preview[:65]}")
    except Exception as e:
        print(f"[{idx:02d}] {item['category']}: ❌ ERROR: {e}")

print(f"\nResult: {len(sample_30) - generic_count}/{len(sample_30)} answered specifically. {generic_count} hit generic fallback.")
