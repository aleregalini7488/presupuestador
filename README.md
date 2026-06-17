# Configurador — Tecnología de Siembra

Herramienta web para generar el listado de códigos y cantidades de partes
según la configuración de tecnología elegida para sembradoras.

**Desarrollado para Agronorte — John Deere Precision Ag**

---

## Cómo usar

1. Abrí `index.html` en cualquier navegador (no requiere servidor, funciona local)
2. Elegí el tipo de tecnología
3. Completá los pasos que aparecen (surcos, mando, módulos según corresponda)
4. El listado de códigos se genera automáticamente
5. Usá **Copiar** para pegarlo en un presupuesto, o **Exportar CSV** para Excel

---

## Tecnologías disponibles

| Opción | Descripción |
|--------|-------------|
| Monitoreo | Solo kit SeedStar + sensores |
| Monitoreo + Dosis Variable | Agrega sensor movimiento y mandos hidráulicos |
| Monitoreo + Row Command | Agrega Rate Controller 3, mando y módulos |
| Monitoreo + Row Command + Dosis Variable | Combinación completa |
| Corte por Secciones | Rate Controller 3 + mando + módulos (sin monitoreo) |

---

## Estructura de archivos

```
index.html   →  Interfaz y lógica de la herramienta
data.js      →  Todos los códigos de partes (actualizar aquí)
README.md    →  Este archivo
```

---

## Cómo actualizar los códigos

Todos los códigos están en **`data.js`**, separados de la lógica.
El archivo tiene comentarios explicando cada sección.

Ejemplo: para cambiar los sensores de monitoreo de 20 surcos,
buscá la sección `sensoresMonitoreo["20@52"]` en `data.js` y editá ahí.

```js
"20@52": [
  { code: "AA72059", desc: "Sensor siembra 20-52", qty: 1 },
  { code: "AA61909", desc: "Sensor de semilla doble", qty: 20 },
],
```

---

## Notas sobre el diagrama original

- El archivo fuente es `diagrama_sembradoras.drawio` (draw.io)
- Los códigos con `qty: "*"` varían según cantidad de surcos (indicado como nota en la herramienta)
- Los módulos Row Command tienen 3 rangos: 1-10, 11-20, 21-30 módulos
