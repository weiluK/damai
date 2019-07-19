<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}商品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basic">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="用户名称">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="model.password"></el-input>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//"$http.defaults.baseURL+'/upload'"
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: "",
        icon: "",
        title: "",
        showTime: "",
        logicAddress: "",
        price: "",
        venueName: "",
        button: "",
        username: ""
      }
    };
  },
  methods: {
    afterUpload(res) {
      console.log(res);
      //   this.$set(this.model, "icon", res.url);
      this.model.icon = res.url;
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon {
  line-height: 170px !important;
}
</style>
