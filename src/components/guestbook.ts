import { Vue, Component } from "vue-property-decorator";
import { db } from "@/firebase";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

@Component
export default class Guestbook extends Vue {
  name = "";
  content = "";
  messages: Array<{ name: string; content: string }> = [];
  visiableCount = 4;

  async mounted() {
    await this.fetchMessages();
  }

  async fetchMessages() {
    const q = query(collection(db, "guestbook"), orderBy("created_at", "desc"));
    const snapshot = await getDocs(q);
    this.messages = snapshot.docs.map((doc) => doc.data() as any);
  }

  async submitMessage() {
    if (!this.name || !this.content) return;

    await addDoc(collection(db, "guestbook"), {
      name: this.name,
      content: this.content,
      created_at: Timestamp.now()
    });

    this.name = "";
    this.content = "";
    await this.fetchMessages();
  }

  get visibleMessage() {
    return this.messages.slice(0, this.visiableCount);
  }

  get isMore() {
    return this.visiableCount < this.messages.length;
  }

  loadMore() {
    this.visiableCount += 4;
  }
}
