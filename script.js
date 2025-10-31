let materias = ["Matemática", "Historia", "Lengua"];
let alumnosInscritos = [];
let materiasPorProfesor = [];
const loginAlumnoForm = document.getElementById("loginAlumno");
if(loginAlumnoForm){
loginAlumnoForm.addEventListener("submit", function(e){
e.preventDefault();
const dni = document.getElementById("dniAlumno").value;
document.getElementById("loginAlumno").style.display = "none";
document.getElementById("materiasContainer").style.display = "block";
let list = document.getElementById("materiasList");
list.innerHTML = "";
materias.forEach(m => {
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.value = m;
checkbox.id = m;
let label = document.createElement("label");
label.htmlFor = m;
label.textContent = m;
let div = document.createElement("div");
div.appendChild(checkbox);
div.appendChild(label);
list.appendChild(div);
});
document.getElementById("inscribirBtn").onclick = () => {
let seleccionadas = [];
materias.forEach(m => { if(document.getElementById(m).checked) seleccionadas.push(m); });
alumnosInscritos.push({dni, materias: seleccionadas});
alert("Inscripción realizada!");
}
});
}
const loginProfesorForm = document.getElementById("loginProfesor");
if(loginProfesorForm){
loginProfesorForm.addEventListener("submit", function(e){
e.preventDefault();
document.getElementById("loginProfesor").style.display = "none";
document.getElementById("materiasProfesorContainer").style.display = "block";
});
document.getElementById("agregarMateriaBtn").onclick = () => {
const nueva = document.getElementById("nuevaMateria").value;
if(nueva){
materias.push(nueva);
materiasPorProfesor.push(nueva);
let li = document.createElement("li");
li.textContent = nueva;
document.getElementById("listaMateriasProfesor").appendChild(li);
document.getElementById("nuevaMateria").value = "";
}
};
}
const habilitarBtn = document.getElementById("habilitarBtn");
if(habilitarBtn){
const alumnosUl = document.getElementById("alumnosInscritos");
const materiasUl = document.getElementById("materiasDisponibles");
function actualizarAdmin(){
alumnosUl.innerHTML = "";
alumnosInscritos.forEach(a => { let li = document.createElement("li"); li.textContent = `DNI: ${a.dni} - Materias: ${a.materias.join(", ")}`; alumnosUl.appendChild(li); });
materiasUl.innerHTML = "";
materias.forEach(m => { let li = document.createElement("li"); li.textContent = m; materiasUl.appendChild(li); });
}
habilitarBtn.onclick = () => { actualizarAdmin(); alert("Todo habilitado y actualizado!"); };
actualizarAdmin();
}