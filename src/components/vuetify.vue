<template>
  <v-app id="inspire">
    <v-card height="200px" flat>
      <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn color="teal" flat value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="favorites">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="nearby">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>

    <!-- 按钮 -->
    <div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="dark" fab="true">秦始皇</v-btn>
    </div>
    <!-- 弹框 -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="red lighten-2" dark v-on="on">阅读</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>书籍</v-card-title>
          <v-card-text>人生海海</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">好看</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- tab切换 -->
    <div>
      <v-toolbar color="cyan" dark tabs>
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="currentItem" color="transparent" fixed-tabs slider-color="yellow">
            <v-tab v-for="item in items" :key="item" :href="'#tab-' + item">{{ item }}</v-tab>

            <v-menu v-if="more.length" bottom class="v-tabs__div" left>
              <template v-slot:activator="{ on }">
                <a class="v-tabs__item" v-on="on">
                  more
                  <v-icon>arrow_drop_down</v-icon>
                </a>
              </template>
              <v-list class="grey lighten-3">
                <v-list-tile v-for="item in more" :key="item" @click="addItem(item)">{{ item }}</v-list-tile>
              </v-list>
            </v-menu>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="currentItem">
        <v-tab-item v-for="item in items.concat(more)" :key="item" :value="'tab-' + item">
          <v-card flat>
            <v-card-text>
              <h2>{{ item }}</h2>
              {{ text }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    msg: "aaa",
    bottomNav: "recent",
    dialog: false,
    currentItem: "tab-Web",
    items: ["Web", "Shopping", "Videos", "Images"],
    more: ["News", "Maps", "Books", "Flights", "Apps"],
    text: "我是谁"
  }),
  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    }
  }
};
</script>

<style>
</style>
