
import EditorUI = require("../EditorUI");
import ModalWindow = require("./ModalWindow");

class NewProject extends ModalWindow {

    constructor() {

        super();

        this.init("Project Type", "AtomicEditor/editor/ui/newproject.tb.txt");

    }

    handleWidgetEvent(ev: Atomic.UIWidgetEvent) {

        if (ev.type == Atomic.UI_EVENT_TYPE_CLICK) {

            var id = ev.target.id;

            if (id == "cancel") {
                this.hide();
                return true;
            }

            var projectType = "";

            if (id == "project_empty") {
                projectType = "EmptyProject/";
            }
            else if (id == "project_2d") {
                projectType = "Project2D/";
            }
            else if (id == "project_3d") {
                projectType = "Project3D/";
            }

            if (projectType) {

                var env = ToolCore.getToolEnvironment();
                var projectTemplateFolder = env.projectTemplatesDir + projectType;

                this.hide();

                var ops = EditorUI.getModelOps();
                ops.showCreateProject(projectTemplateFolder);


            }

        }
    }
}


export = NewProject;