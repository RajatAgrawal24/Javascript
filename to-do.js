const userNameTextField = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");
let userArray = []; //to store data
const recordDisplay = document.getElementById("records");
let edit_id = null;
const btnText = addUserBtn.innerText;

addUserBtn.onclick = () => {
    let data = userNameTextField.value;
    //alert(data);
    if (edit_id != null) {
        userArray.splice(edit_id, 1, { name: data });
        edit_id = null;
    } else {
        userArray.push({ name: data }); //key->value
        //console.log(userArray);
    }
    saveData(userArray);
    userNameTextField.value = "";
    addUserBtn.innerText = btnText;
};

function saveData(userArray) {
    let str = JSON.stringify(userArray); //convert object to string
    //console.log(str);
    localStorage.setItem("users", str);

    displayData();
}

//to get data from local storage
let objstr = localStorage.getItem("users");
//console.log(objstr);

if (objstr != null) {
    userArray = JSON.parse(objstr); //convert string to object
    //console.log(userArray);
}

function displayData() {
    let data = "";
    userArray.forEach((user, i) => {
        // console.log(user);
        data += `<tr>
                    <th>${i + 1}</th>
                    <td>${user.name}</td>
                    <td>
                        <i class="btn text-white fa fa-edit btn-info mx-2" 
                        onclick='EditInfo(${i})'></i>
                        <i class="btn btn-danger text-white fa fa-trash" 
                        onclick='DeleteInfo(${i})'></i>
                    </td>
                </tr>`;
        //console.log(data);
    });
    recordDisplay.innerHTML = data;
}

function EditInfo(id) {
    //alert (id);
    edit_id = id;
    userNameTextField.value = userArray[id].name;
    addUserBtn.innerText = "Update User";
}

function DeleteInfo(id) {
    userArray.splice(id, 1);
    saveData(userArray);
}







