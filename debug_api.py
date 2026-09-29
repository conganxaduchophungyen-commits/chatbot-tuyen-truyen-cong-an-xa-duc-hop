import urllib.request, json

res = urllib.request.urlopen('http://localhost:3000/api/articles')
arts = json.loads(res.read().decode('utf-8'))
total = len(arts)
online_count = sum(1 for a in arts if a.get('category_type') == 'online' or str(a.get('code','')).startswith('ON'))
offline_count = sum(1 for a in arts if a.get('category_type') == 'offline' or str(a.get('code','')).startswith('OFF'))
neither_count = sum(1 for a in arts if not str(a.get('code','')).startswith('ON') and not str(a.get('code','')).startswith('OFF'))

with open('api_debug.txt', 'w', encoding='utf-8') as f:
    f.write(f"Total articles from API: {total}\n")
    f.write(f"Online: {online_count}, Offline: {offline_count}, Neither/No code: {neither_count}\n\n")
    f.write("First 10 articles:\n")
    for a in arts[:10]:
        code = a.get('code', 'NO_CODE')
        cat = a.get('category_type', 'NO_TYPE')
        art_id = a.get('id', 'NO_ID')
        title = a.get('title', '')[:60]
        f.write(f"  id={art_id}, code={code}, category_type={cat}\n")
        f.write(f"  title={title}\n\n")

print(f"Total: {total}, Online: {online_count}, Offline: {offline_count}, Neither: {neither_count}")
print("Check api_debug.txt for details")
