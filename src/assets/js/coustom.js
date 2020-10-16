function addRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    if (rowCount < 4) {
      // limit the user from creating fields more than your limits
      var row = table.insertRow(rowCount);
  
      var colCount = table.rows[0].cells.length;
      row.id = "row_" + rowCount;
      for (var i = 0; i < colCount; i++) {
        var newcell = row.insertCell(i);
        newcell.outerHTML = table.rows[0].cells[i].outerHTML;
      }
      var listitems = row.querySelectorAll("input, select");
  
      for (i = 0; i < listitems.length; i++) {
        listitems[i].setAttribute("oninput", "calculate('" + row.id + "')");
      }
    } else {
      alert("Maximum Passenger per ticket is 4.");
    }
  }
  function calculate(elementID) {
    var mainRow = document.getElementById(elementID);
    var myBox1 = mainRow.querySelectorAll("[name=qty]")[0].value;
    var myBox3 = mainRow.querySelectorAll("[name=sel]")[0].value;
    var total = mainRow.querySelectorAll("[name=total]")[0];
    var myResult1 = myBox1 * myBox3;
    total.value = myResult1;
  
    // calculate the totale of every total
    var sumContainer = document.getElementById("totalOfTotals");
    var totalContainers = document.querySelectorAll("[name=total]"),
      i;
    var sumValue = 0;
    for (i = 0; i < totalContainers.length; ++i) {
      sumValue += parseInt(totalContainers[i].value);
    }
    sumContainer.textContent = sumValue;
  
    var finalTotal = document.getElementById("finalTotal");
    var discount = 0;
    var discountCountainer = document.getElementById("discount");
    discount = discountCountainer.value;
    
    if (discount==0) {
      finalTotal.value = sumValue;
    } else {
      sumValue =sumValue-discount;
      finalTotal.value = sumValue;
    }
    
  
  }
  
  function calculateFinalAmount(discount) {
    var sumContainer = document.getElementById("totalOfTotals");
    var sumValue = sumContainer.textContent;
    sumValue = sumValue - (sumValue*discount/100);
    var finalTotal = document.getElementById("finalTotal");
    finalTotal.value = sumValue;
  
  
   
  }