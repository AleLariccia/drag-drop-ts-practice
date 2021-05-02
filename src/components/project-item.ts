/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />

namespace App {
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable {
    private project: Project;

    get persons() {
      if (this.project.people === 1) {
        return "1 person";
      }

      return `${this.project.people} persons`;
    }

    constructor(hostId: string, project: Project) {
      super(
        "single-project",
        hostId,
        "beforeend",
        `${project.id}-project-item`
      );

      this.project = project;

      this.configure();
      this.renderContent();
    }

    @Autobind
    dragStartHandler(event: DragEvent) {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    @Autobind
    dragEndHandler(event: DragEvent) {
      console.log("DragEnd", event);
    }

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent() {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("p")!.textContent = this.project.description;
      this.element.querySelector(
        "h4"
      )!.textContent = `Collaborators: ${this.persons}`;
    }
  }
}
