//------Call Element
var buttonAdd = callElement("#btn_add")
var valueInput = callElement("#input_needtodo")
var showNeedToDoList = callElement("#need_to_do")
var showCompletList = callElement("#completed")
var showNothingToDo = callElement("#nothingtodo")

//------Before
var beforeToDoList = document.querySelector('#todolist .tdl_result .list_need');
var beforeElement = document.createElement('before');
//------Array List Need to Do
var toDoList = [
    {
        need: ""
    }
]
var completedList = [
    {
        need: ""
    }
]
//------FUNCTION CALL ELEMENT
function callElement(id) {
    return document.querySelector(id)
}
//------FUNCTION SHOW TO DO LIST
function showToDoList() {
    var str = ""
    toDoList.map((item) => {
        var needToDo = item.need
        var display = needToDo ? "visible" : "hidden";
        var displaySpan = toDoList.length > 1 ? "none" : "block"
        str += `
        <div class="show_thongbao" style="display:${displaySpan}">
            <span>Bạn chưa có dự định nào cả</span>
        </div>

        <li style="list-style: none; visibility: ${display}">
            <span>${needToDo}</span>
            <div class="buttons">
                <span id="remove" onclick="removeNeedToDo('${needToDo}')"><i class="fa-solid fa-trash-can remove_icon"></i></span>
                <span id="completed" onclick="addToCompleted('${needToDo}')" ><i class="fa-regular fa-circle-check"></i></span>
            </div>
        </li>
        `
    })
    showNeedToDoList.innerHTML = str
}
showToDoList()
//------FUNCTION ADD NEED TO DO
function addToDoList() {
    var newNeedToDo = valueInput.value;
    if (newNeedToDo) {
        var checkNewNeedToDo = false;
        toDoList.map((item) => {
            if (newNeedToDo === item.need) {
                checkNewNeedToDo = true;
            }
        })

        if (checkNewNeedToDo) {
            alert("Công việc này đã nằm trong danh sách")
        } else {
            var needToDoNew = {
                need: newNeedToDo
            }
            toDoList.push(needToDoNew)
        }
        showToDoList()
    } else {
        alert("Không được để trống")
    }
}
buttonAdd.addEventListener("click", addToDoList)
//------FUNCTION REMOVE NEED TO DO
function removeNeedToDo(object) {
    var needRemove = toDoList.findIndex((item) => {
        return item.need === object
    })

    if (needRemove !== -1) {
        toDoList.splice(needRemove, 1)
    }
    showToDoList()
}
//------FUNCTION SHOW COMPLETED LIST
function showCompletedList() {
    var str = ""
    completedList.map((item) => {
        var completed = item.need
        var display = completed ? "visible" : "hidden";
        var displaySpan = completedList.length > 1 ? "none" : "block"
        str += `
        <div class="show_thongbao" style="display:${displaySpan}";>
            <span>Bạn chưa hoàn thành công việc nào</span>
        </div>

        <li style="list-style: none; visibility: ${display}">
            <span>${completed}</span>
            <div class="buttons">
                <span id="remove" onclick="removeObjectCompltedList('${completed}')"><i class="fa-solid fa-trash-can remove_icon"></i></span>
                <span id="completed" style="color:#2cdfc1;"><i class="fa-regular fa-circle-check"></i></span>
            </div>
        </li>
        `
    })
    showCompletList.innerHTML = str
}
showCompletedList()
//------FUNCTION SHOW REMOVE COMPLETED LIST
function addToCompleted(object) {
    var doiTuong = toDoList.findIndex((item) => {
        return item.need === object
    })

    if (doiTuong !== -1) {
        var completedItem = toDoList[doiTuong];
        toDoList.splice(doiTuong, 1)
        completedList.push(completedItem);
    }
    showToDoList()
    showCompletedList()
}

function removeObjectCompltedList(object) {
    var removeCompleted = completedList.findIndex((item) => {
        return item.need === object
    })
    if (removeCompleted !== -1) {
        completedList.splice(removeCompleted, 1)
    }
    showCompletedList()
}


