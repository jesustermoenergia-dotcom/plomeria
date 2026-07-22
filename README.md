# Portafolio de Plomería

Sitio web sencillo y adaptable para GitHub Pages.

## Archivos

- `index.html`: contenido principal.
- `style.css`: diseño y colores.
- `script.js`: menú móvil y enlace de WhatsApp.
- `images/`: fotografías futuras.

## Cambios importantes

En `script.js`, sustituya:

```js
const WHATSAPP_NUMBER = "00000000000";
```

por el número completo con código de país, sin `+`, espacios ni guiones.

Ejemplo:

```js
const WHATSAPP_NUMBER = "5355555555";
```

## Publicar en GitHub Pages

1. Crear una cuenta en GitHub.
2. Crear un repositorio llamado `plomeria`.
3. Subir todos estos archivos.
4. Abrir `Settings`.
5. Entrar en `Pages`.
6. En `Build and deployment`, seleccionar `Deploy from a branch`.
7. Elegir la rama `main` y la carpeta `/root`.
8. Guardar.

La dirección normalmente será:

`https://USUARIO.github.io/plomeria/`
