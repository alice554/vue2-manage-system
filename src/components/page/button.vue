<template>
    <div>
      <my-button type="primary" text="Primary"></my-button>
      <my-button type="success" text="Success"></my-button>
      <my-button type="warning" text="Warning"></my-button>
      <my-button type="danger" text="Danger"></my-button>
      <my-button type="info" text="Info"></my-button>
      <my-button type="text" text="Text"></my-button>
      <my-button size="medium" text="Medium"></my-button>
      <my-button size="small" text="Small"></my-button>
      <my-button size="mini" text="Mini"></my-button>
      <my-button icon="search" text="With Icon"></my-button>
      <my-button :loading="true" text="Loading"></my-button>
      <my-button :disabled="true" text="Disabled"></my-button>
      <my-button :round="true" text="Round"></my-button>
    </div>
  </template>
  
  <script>
    import mybutton from "../page/mybutton.vue";

  
    export default {
      components: {
        mybutton
      }
    }
  </script>