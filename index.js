function removeRow() {
    // $(".rowMedic").remove();
    const rem = this.parentNode.parentNode;
    const remFrom = rem.parentNode;

    remFrom.removeChild(rem);
}

$(document).ready(function () {
    $(".remove-button").click(removeRow)
});


// Dodawanie i usuwanie do pielegnaci i leków

const medicinContainer = document.querySelector(".medicin");
const medicinButton = document.querySelector(".medicin .add-button");

medicinButton.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("row", "rowMedic");
    newDiv.innerHTML = `<div class="col-7">
                            <th scope="col"><input type="text" class="input-field"></th>
                        </div>
                        <div class="col-1">
                            <th scope="col"><input type="button" class="remove-button" value="-"></th>
                        </div>
                        <div class="col-2">
                            <th scope="col"><input type="number" class="input-field-short"></th>
                        </div>
                        <div class="col-2">
                            <th scope="col"><input type="number" class="input-field-short"></th>
                        </div>`;

    newDiv.querySelector(".remove-button").addEventListener("click", removeRow);

    medicinContainer.querySelector("div:first-child").appendChild(newDiv);
});

// Dodawanie i usuwanie do ubranek 

const clothesContainer = document.querySelector(".clothes");
const clothesButton = document.querySelector(".clothes .add-button");

clothesButton.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("row");
    newDiv.innerHTML = `<div class="col-7">
                        <th scope="col"><input type="text" class="input-field"></th>
                    </div>
                    <div class="col-1">
                        <th scope="col"><input type="button" class="remove-button" value="-"></th>
                    </div>
                    <div class="col-2">
                        <th scope="col"><input type="number" class="input-field-short"></th>
                    </div>
                    <div class="col-2">
                        <th scope="col"><input type="number" class="input-field-short"></th>
                    </div>`;

    newDiv.querySelector(".remove-button").addEventListener("click", removeRow);

    clothesContainer.querySelector("div:first-child").appendChild(newDiv);
});

$(document).ready(function () {
    $(".remove-buttonUbr").click(function () {
        $(".rowclothes").remove();
    });
});


// Dodawanie i usuwanie do akcesoriów

const accessoriesContainer = document.querySelector(".accessories");
const accessoriesButton = document.querySelector(".accessories .add-button");

accessoriesButton.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("row");
    newDiv.innerHTML = `<div class="col-7">
                        <th scope="col"><input type="text" class="input-field"></th>
                    </div>
                    <div class="col-1">
                        <th scope="col"><input type="button" class="remove-button" value="-"></th>
                    </div>
                    <div class="col-2">
                        <th scope="col"><input type="number" class="input-field-short"></th>
                    </div>
                    <div class="col-2">
                        <th scope="col"><input type="number" class="input-field-short"></th>
                    </div>`;

    newDiv.querySelector(".remove-button").addEventListener("click", removeRow);

    accessoriesContainer.querySelector("div:first-child").appendChild(newDiv);
});


//usuwanie pól


$(document).ready(function () {
    $(".remove-buttonAkc").click(function () {
        $(".rowaccessories").remove();
    });
});


// Funkcja liczaca sume osobno z lewych i prawych pol (klasy).

function computeSum() {       
    let sum = 0;

    if (this.classList.contains("expected-cost")) { // Suma lewych pol.
        $(".expected-cost").each(function (e) {
            sum += Number(this.value);
        });
        $("#expectDiv")[0].innerHTML = sum;


    } else if (this.classList.contains("real-cost")) { // Suma prawych pol.
        $(".real-cost").each(function (e) {
            sum += Number(this.value);
            $("#realDiv")[0].innerHTML = sum;
        });
    }

    var numberONe = Number($("#expectDiv")[0].innerHTML); //różnica prawych i lewych pół 
    var nuberTwo = Number($("#realDiv")[0].innerHTML);

    var avalible = numberONe - nuberTwo;
    $("#avalible")[0].innerHTML = avalible;


    console.log(sum);
}


 // Dodanie funcji nasluchujacej do kazdego krotkiego pola.


$(document).ready(function () {     
    $(".input-field-short").change(computeSum);
});