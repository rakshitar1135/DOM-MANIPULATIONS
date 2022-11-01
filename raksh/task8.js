var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter')
form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems)
function addItem(e){
e.preventDefault();

var newItem=document.getElementById('item').value;
var li=document.createElement('li');
li.className='List-group-item';
li.appendChild(document.createTextNode(newItem));
var deleteBtn=document.createElement('button');
deleteBtn.className='btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('DELETE EXPENSE'))
li.appendChild(deleteBtn);
itemList.appendChild(li)
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}
function filterItems(){
    var text=e.target.value.toLowerCase();
    var item=itemList.getElementsByTagName('li')
    
}
