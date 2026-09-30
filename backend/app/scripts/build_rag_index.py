import sys, os
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', '..'))
os.environ['PYTHONIOENCODING'] = 'utf-8'

from app.services.vector_rag import build_index, is_index_ready

if __name__ == "__main__":
    print("=" * 60)
    print("RAG Index Builder - Cong an xa Duc Hop")
    print("=" * 60)

    force = "--force" in sys.argv

    if is_index_ready() and not force:
        print("Index da ton tai. Dung --force de rebuild.")
    else:
        print("Dang build index...")
        success = build_index(force_rebuild=force)
        if success:
            print("\nBuild thanh cong! Chatbot RAG san sang hoat dong.")
        else:
            print("\nBuild that bai. Kiem tra lai dependencies.")
            sys.exit(1)
