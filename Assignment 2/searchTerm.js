const searchFun = ()=>{
    let filterInputData = document.getElementById('searchTerm').value.toUpperCase(); //filter input data from the users
    
    let tableData = document.getElementById('table-data');

    let tr = tableData.getElementsByTagName('tr');

    //iterate all the elements in the table & make compersion
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[1];

        if(td){
            let textValue = td.textContent || td.innerHTML;

            // action to perform search
            if(textValue.toUpperCase().indexOf(filterInputData) > -1 ){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

//complexity O(n)