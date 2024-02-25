# ER ORIENTACOMP

```mermaid
erDiagram
    GENEROS ||--o{ PERSONAS : tiene
    GENEROS {
        integer id_genero PK
        string nombre "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    DOCUMENTOS_TIPO ||--o{ PERSONAS : tiene
    DOCUMENTOS_TIPO {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    SEGUIMIENTOS_TIPO ||--o{ SEGUIMIENTOS : tiene
    SEGUIMIENTOS_TIPO {
        integer id PK
        string nombre  "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    ROLES {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    PAISES ||--o{ PROVINCIAS : tiene
    PAISES ||--o{ PERSONAS : tiene
    PAISES {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        string nacionalidad "Length 32, Not null, Unique"
        string iso  "Length 3, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    PROVINCIAS ||--o{ LOCALIDADES : tiene
    PROVINCIAS ||--o{ PERSONAS : tiene
    PROVINCIAS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        integer id_pais FK "Not null"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    LOCALIDADES ||--o{ PERSONAS : tiene
    LOCALIDADES {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        integer id_provincia FK "Not null"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    INSTITUTOS ||--o{ CARRERAS : tiene
    INSTITUTOS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    CARRERAS ||--o{ PERSONAS : tiene
    CARRERAS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    ESTADOS ||--o{ SEGUIMIENTOS : tiene
    ESTADOS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        string color  "Length 32, Not null, Unique"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    CATEGORIAS ||--o{ SEGUIMIENTOS : tiene
    CATEGORIAS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        string color "Length 32, Not null, Unique"
        boolean deleted "Default false"   
        date createdAt "Not null"
        date updateAt "Not null"
    }

    SEGUIMIENTOS ||--|{ PERSONAS : tiene
    SEGUIMIENTOS {
        integer id PK
        integer id_seguimiento_tipo FK "Not null"
        integer id_categorias FK "Not null"
        integer id_estados FK "Not null"
        integer id_orientado FK "Not null"
        integer id_seguidor FK "Not null"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    ENTREVISTAS ||--|{ SEGUIMIENTOS : tiene
    ENTREVISTAS ||--|{ PERSONAS : tiene
    ENTREVISTAS ||--|{ ALMACENAMIENTOS : almacena
    ENTREVISTAS {
        integer id PK
        integer id_entrevistador FK "Not null"
        string descripcion "Length 2048, Not null, Unique"
        string observacion "Length 2048, Not null, Unique"
        string accion
        integer id_almacenamiento FK
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    PERSONAS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        string apellido "Length 32, Not null, Unique"
        string email "Length 32, Not null, Unique"
        integer id_documento FK "Not null"
        string documento "Length 32, Not null, Unique"
        string telefono "Length 32, Not null, Unique"
        integer id_genero FK "Not null"
        integer id_pais FK "Not null"
        integer id_provincia FK "Not null"
        integer id_localidad FK "Not null"
        integer id_carrera FK "Not null"
        boolean deleted "Default false"
        date createdAt "Not null"
        date updateAt "Not null"
    }

    USUARIOS ||--|{ PERSONAS : tiene
    USUARIOS ||--|{ ROLES : tiene
    USUARIOS {
        integer id PK
        integer id_persona FK "Not null"
        integer id_rol FK "Not null"
        string password "Length 16, Not null, Unique"
        boolean deleted "Default false"
        date createdAt
        date updateAt
    }

    ALMACENAMIENTOS {
        integer id PK
        string nombre "Length 32, Not null, Unique"
        date createdAt "Not null"
        boolean deleted "Default false"
        date updateAt "Not null"
    }