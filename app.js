
const without = location.href.replace(/\/index\.html$/, '');

fetch(without + 'redes.json')
.then(response => response.json())
.then(data => {
	const nombre = data.nombre;
	const redes = data.redes;
	redes.map( red => {
		// Clonar la plantilla
		const template = document.getElementById('clone-template-social');
		const clone = document.importNode(template.content, true);
		// Modificar los datos en el clon
		const link = clone.querySelector('.item--logo');
		link.href = red.link;
		link.title = `${red.social}: ${nombre}`;
		//
		const linkTag = clone.querySelector('.item--link');
		linkTag.innerHTML = `${red.social}: <strong>${nombre}</strong>`;
		// 
		const iconTag = clone.querySelector('.item--icon');
		iconTag.setAttribute('data-icon', red.icon);
		document.querySelector('.box--content').appendChild(clone);
	})
})