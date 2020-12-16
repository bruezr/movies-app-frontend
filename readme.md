# Movies App (Frontend) 🎬  Work In Progress 

App control de inventario de un videoclub (para nostálgicos del VHS 📼)

## Detalles 👀

- Existen dos branchs de esta app:
  - **Master**: Ofrece datos generados desde un service interno del proyecto para que el usuario pueda jugar con la app sin realizar cambios permanentes.
  - **data-from-mongodb**: Esta rama está tiene código que permite conectarse, obtener y publicar información en una Mongo DB.

- Utilizo un mix de Optimistic y Pessimistic Updates: cuándo hacemos clic en el botón "Delete" guardo el estado previo del elemento, intento hacer el cambio en la DB, y si no es posible revierto el estado con el backup que acabo de realizar. De esta forma las operaciones se realizan rápidamente y son fiables.

- Los forms validan varios parámetros y dan indicaciones visuales al usuario de los errores luego de hacer clic en submit.
