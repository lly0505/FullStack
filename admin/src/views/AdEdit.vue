<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
            <i class="el-icon-plus"></i>
            添加广告
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col class="col-items" :md="24" v-for="(item, i) in model.items" :key="i">
              <el-form-item label="跳转链接(URL)">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item class="image-items" label="图片">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="res => $set(item, 'image', res.url)"
                >
                  <img v-if="item.image" :src="item.image" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button 
                  size="small" 
                  type="danger"
                  @click="model.items.splice(i, 1)"
                  >删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: "",
        items: []
      },
      parents: []
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    // 获取详情数据
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = Object.assign({}, this.model , res.data)
    },
    // 获取上级元素
    async fetchParents() {
      const res = await this.$http.get(`rest/ads`);
      this.parents = res.data;
    }
  },
  created() {
    this.fetchParents();
    this.id && this.fetch();
  }
};
</script>

<style>
.col-items{
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid #c6e2ff;
}
.image-items{
  margin-top: 1rem;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    min-width: 10rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
}

.avatar {
    min-width: 10rem;
    height: 5rem;
    display: block;
}
</style>
