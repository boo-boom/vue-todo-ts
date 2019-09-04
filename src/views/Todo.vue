<template>
  <div class="todo-page">
    <ul>
      <TodoItem
        v-for="(item, index) of list"
        :key="item.text"
        :item="item"
        :index="index"
        :editingIndex="editingIndex"
        @onSave="handleSave"
        @onEdit="handleEdit"
        @onCancel="handleCancel"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem";

@Component({
  name: "Todo",
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  public editingIndex = -1;
  public list = [
    {
      text: "javascript",
      complete: false
    },
    {
      text: "typescript",
      complete: false
    }
  ];
  public handleSave({ index, content }) {
    this.list[index].text = content;
    this.handleCancel();
  }
  public handleEdit(index) {
    this.editingIndex = index;
  }
  public handleCancel() {
    this.editingIndex = -1;
  }
}
</script>
