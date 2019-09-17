document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#shoe-list ul');
    const forms = document.forms;
  
    // this is to delete shoes
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
  
    // this is to add shoes 
    const addForm = forms['add-shoes'];
    addForm.addEventListener('submit', function(e){  
      e.preventDefault();
  
      // this creates elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const shoesName = document.createElement('span');
      const deleteButton = document.createElement('span');
     

      // here we add text content
      shoesName.textContent = value;
      deleteButton.textContent = 'delete';
     
  
      // here we add classes
      shoesName.classList.add('name');
      deleteButton.classList.add('delete');

  
      // this is where we append to DOM
      li.appendChild(shoesName);
      li.appendChild(deleteButton);
      list.appendChild(li);
    });
  
    // section to hide shoes
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
      if(hideBox.checked){
        list.style.display = "none";
      } else {
        list.style.display = "initial";
      }
    });
  
    // filter through shoes 
    const searchBar = forms['search-sneakers'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const shoes = list.getElementsByTagName('li');
      Array.from(shoes).forEach((shoe) => {
        const shoeAvailable = shoe.firstElementChild.textContent;
        if(shoeAvailable.toLowerCase().indexOf(e.target.value) != -1){
          shoe.style.display = 'block';
        } else {
          shoe.style.display = 'none';
        }
      });
    });
  
    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
  
  })