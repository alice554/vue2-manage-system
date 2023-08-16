<!-- <template>
    <button :class="buttonClass" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'mybutton',
    props: {
      type: {
        type: String,
        default: 'button'
      }
    },
    computed: {
      buttonClass() {
        return `my-button ${this.type}-button`;
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style>
  .my-button {
    background-color: rgb(241, 170, 182);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .my-button:hover {
    background-color: #d77691;
  }
  
  .primary-button {
    background-color: #2ecc71;
  }
  
  .danger-button {
    background-color: #e74c3c;
  }
  </style> -->
  <template>
    <button 
      :class="[
        'el-button',
        `el-button--${type}`,
        size ? `el-button--${size}` : '',
        {
          'is-disabled': disabled,
          'is-loading': loading
        }
      ]"
      :disabled="disabled || loading"
      @click="$emit('click')"
    >
      <i v-if="icon" :class="`el-icon-${icon}`"></i>
      <span v-if="!icon">{{text}}</span>
    </button>
  </template>
  
  <script>
    export default {
      name: 'mybutton',
      props: {
        type: {
          type: String,
          default: 'default'
        },
        size: String,
        disabled: Boolean,
        loading: Boolean,
        text: String,
        icon: String,
        round: Boolean
      }
    }
  </script>
  
  <style scoped>
    .el-button {
      display: inline-block;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      background-color: #fff;
      color: #606266;
      cursor: pointer;
      outline: none;
      transition: .1s;
    }
  
    .el-button--primary {
      color: #fff;
      background-color: #409EFF;
      border-color: #409EFF;
    }
  
    .el-button--success {
      color: #fff;
      background-color: #67C23A;
      border-color: #67C23A;
    }
  
    .el-button--warning {
      color: #fff;
      background-color: #E6A23C;
      border-color: #E6A23C;
    }
    .el-button--warning:hover {
      color: #fff;
      background-color: #c9a97a;
      border-color: #E6A23C;
    }
  
    .el-button--danger {
      color: #fff;
      background-color: #F56C6C;
      border-color: #F56C6C;
    }
  
    .el-button--info {
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }
  
    .el-button--text {
      padding: 0;
      color: #606266;
      background-color: transparent;
      border-color: transparent;
    }
  
    .el-button--medium {
      padding: 10px 20px;
      font-size: 16px;
    }
  
    .el-button--small {
      padding: 9px 15px;
      font-size: 13px;
    }
  
    .el-button--mini {
      padding: 7px 12px;
      font-size: 12px;
    }
  
    .el-button--round {
      border-radius: 20px;
    }
  
    .el-button.is-disabled {
      cursor: not-allowed;
      opacity: .6;
    }
  
    .el-button.is-loading {
      position: relative;
      cursor: wait;
      pointer-events: none;
    }
  
    .el-button.is-loading:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 2px solid #fff;
      border-top-color: transparent;
      animation: spin .6s linear infinite;
      z-index: 1;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>