var tbl = document.getElementById('pixel_canvas');
tbl.style.width = '30%';
tbl.style.border = '1px solid black';
var max_col ,max_row;
max_col = max_row = 100;
var flag;

function createRowCol(row, col) {
    var i;
    for (i = 0; i < row; i++) {
        var rr = tbl.insertRow(-1);
        for(j = 0; j < col; j++) {
            rr.insertCell(-1);   
        }
    }
}

function deleteRowCol() {
    var tbl = document.getElementById("pixel_canvas");
    var len = tbl.rows.length;
    len = len - 1;
    var i;
    for (i = 0; i < len+1; i++) {
        tbl.deleteRow(-1);
    }
}

function check(row, col)
{
    console.log(row);
   if (row > max_row || col > max_col)
       {
           return false;
       }
    return true;
}
function makeGrid() {
    deleteRowCol();
    var column_num, row_num, g_color;
    var row = document.getElementById('input_height');
    var col = document.getElementById('input_width'); 
    flag = check(row.value, col.value);
     if(!flag)
         {
            alert("Maximum limit of either row or column reached. Retry!");
         }
    else 
        {
           createRowCol(row.value, col.value);
        }    
    
    $(document).ready(function(){ 
        $("#pixel_canvas td").click(function() {
            column_num = parseInt( $(this).index() ) + 1;
            row_num = parseInt( $(this).parent().index() )+1;
            g_color = $("#colorPicker").val();
            $("#pixel_canvas").find("tr").eq(row_num-1).children().eq(column_num-1).attr("bgcolor", g_color) 
        });  
        
    });
    return false;
}

function init() {
    document.getElementById('sizePicker').onsubmit = makeGrid;
}

window.onload = init;
