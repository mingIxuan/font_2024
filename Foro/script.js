function mostrarCursoCurso() {
    document.querySelector('#curso').style.display = 'block';
    document.querySelector('#juegos').style.display = 'none';
    document.querySelector('#foro').style.display = 'none';
    alert("The link was clicked!");
}
function mostrarJuegos() {
    document.querySelector('#curso').style.display = 'none';
    document.querySelector('#juegos').style.display = 'block';
    document.querySelector('#foro').style.display = 'none';
    alert("The link was clicked!");
}
function mostrarForo() {
    document.querySelector('#curso').style.display = 'none';
    document.querySelector('#juegos').style.display = 'none';
    document.querySelector('#foro').style.display = 'block';
    alert("The link was clicked!");
}

document.querySelector('#abrirCurso').addEventListener('click', mostrarCurso);
document.querySelector('#abrirJuegos').addEventListener('click', mostrarJuegos);
document.querySelector('#abrirForo').addEventListener('click', mostrarForo);

