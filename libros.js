
        function mostrarlibros() {
            const categoria = parseInt(document.getElementById('categoria').value);
            let libros;

            switch (categoria) {
                case 1:
                    libros = "• Paraiso de nadie - Susana Theonon" ;
                    break;
                case 2:
                    libros = "• Don Quijote de la Mancha - Miguel de Cervantes";
                    break;
                case 3:
                    libros = "• IT - Stephen Kings";
                    break;
                case 4:
                    libros = "• Harry Potter - Joanne Rowling";
                    break;
                case 5:
                    libros = "• La chica del tren - Paula Hawkins";
                    break;
                case 6:
                    libros = "• Orgullo y prejuicio - Jane Austen";
                    break;
                default:
                    libros = "no valido";
                    break;
            }

            document.getElementById('libros').textContent = libros;
        }
