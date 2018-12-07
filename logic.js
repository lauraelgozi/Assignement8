class App extends React.Component {
    render() {
        return (
            <div><Header />
                <Todo />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="navBar">
                    <div className="title">My toDo List</div>
                    <img alt="list" className="logo" src="https://image.flaticon.com/icons/svg/230/230318.svg"></img>
                    <img className="user" src="https://image.flaticon.com/icons/svg/149/149452.svg"></img>
                </div>
                <div className="navBarDone">
                </div>
            </div>
        );
    }
}
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myTask: [],
            listDone: [],
            className:"doneit"
        }
        this.addTasks = this.addTasks.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.isAppear = this.isAppear.bind(this)
        this.deleteTaskDone = this.deleteTaskDone.bind(this)
        this.undo =this.undo.bind(this)
    }
    addTasks() {
        var activity = this.textInput.value;
        var array = this.state.myTask
        array.push(activity);
        this.setState({ myTask: array })
    }
    deleteTask(x) {
        var array = this.state.myTask
        for (var i = 0; i < array.length; i++) {
            if (x === array[i]) {
                array.splice(i, 1)
            }
        }
        this.setState({ myTask: array });
    }
    isAppear(event) {
        var activity = event.target.parentElement.textContent;
        var array = this.state.listDone
        array.push(activity);
        this.deleteTask(event.target.parentElement.textContent)
        this.setState({ listDone: array })
    }
    deleteTaskDone(e) {
        var item = e.target.parentElement;
        item.remove()

    }
    undo(e) {
            var item = e.target.parentElement.textContent;
            var array = this.state.myTask
            array.push(item);
            this.setState({ myTask: array })
            this.deleteTaskDone(e)
        
    }
    render() {
        var list = this.state.myTask.map(x => <li key={`item${x}`} className="li">
            <div>
                {x}
                <div className="didIt" onClick={this.isAppear}></div>
                <img className="delete" src="https://image.flaticon.com/icons/svg/1214/1214594.svg" onClick={this.deleteTask.bind(this, x)} ></img>
            </div>
        </li>)
        var list2 = this.state.listDone.map(z => <li key={`item${z}`} >
            <div className="doneit">
                {z}
                <img className="undo" src="https://image.flaticon.com/icons/svg/0/340.svg" onClick={this.undo}></img>
                <img className="delete" src="https://image.flaticon.com/icons/svg/1214/1214594.svg" onClick={this.deleteTaskDone}></img>
            </div>
        </li>)
        return (
            <div className="todo">
                <div className="titleTodo">
                    <input ref={(input) => { this.textInput = input; }} className="input" placeholder="Add a Task"></input>
                    <button className="btn" onClick={this.addTasks} >Enter</button>
                    <ul>
                        {list}
                    </ul>
                    <div className="done">
                        <div className="titleDone">
                        </div>
                        <img alt="logoDone" className="logoDone" src="https://image.flaticon.com/icons/svg/265/265706.svg"></img>
                        <ul className="oKdone" > {list2}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        < App />,
        document.getElementById("root")
    );
}
render();
