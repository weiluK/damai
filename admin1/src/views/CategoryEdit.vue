<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}商品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="商品名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="演唱会地址">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="演唱会时间">
            <el-input v-model="model.showTime"></el-input>
          </el-form-item>
          <el-form-item label="公园地址">
            <el-input v-model="model.venueName"></el-input>
          </el-form-item>
          <el-form-item label="举办市区">
            <el-input v-model="model.logicAddress"></el-input>
          </el-form-item>
          <el-form-item label="演唱会价格">
            <el-input v-model="model.price" placeholder="格式如: ¥300 - ¥1080"></el-input>
          </el-form-item>
          <el-form-item label="是否开售">
            <el-input v-model="model.button" placeholder="true / false"></el-input>
          </el-form-item>
          <el-form-item label="宣传海报">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL+'/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.icon" :src="model.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
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
        button: ""
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
        res = await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
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
