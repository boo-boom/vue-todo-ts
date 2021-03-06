import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

interface Item {
  text: string;
  complete: boolean;
}

const styleComplete = {
  textDecoration: "line-through",
};

@Component({
  name: "TodoItem",
})
export default class TodoItem extends Vue {
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number) public editingIndex!: number;

  public editingContent = "";

  @Watch("editingIndex")
  public editingChange(newVal) {
    if (newVal === this.editingIndex) {
      this.editingContent = this.item.text;
    } else {
      this.editingContent = "";
    }
  }

  // 推荐使用Emit装饰器
  // public save() {
  //   this.$emit("onSave", {
  //     index: this.index,
  //     content: this.editingContent,
  //   });
  // }
  @Emit("onSave")
  public save() {
    return {
      index: this.index,
      content: this.editingContent,
    };
  }

  public edit(e) {
    this.$emit("onEdit", this.index);
  }

  @Emit("onCancel")
  public cancel() {
    return null;
  }

  @Emit("onComplete")
  public complete() {
    return {
      index: this.index,
      complete: !this.item.complete,
    };
  }

  protected render() {
    return (
      <li>
        {this.editingIndex === this.index ? (
          <div style={{ display: "flex" }}>
            <a-input type="text" v-model={this.editingContent} />
            <a-icon type="check" nativeOn-click={this.save} />
            <a-icon type="close" nativeOn-click={this.cancel} />
          </div>
        ) : (
          <div>
            <span
              style={this.item.complete ? styleComplete : ""}
              onClick={this.complete}>
              {this.item.text}
            </span>
            <a-icon type="edit" nativeOn-click={this.edit} />
          </div>
        )}
      </li>
    );
  }
}
