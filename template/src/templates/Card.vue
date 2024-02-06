<template>
    <div class="card text-bg-primary" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                {{ subtitle }}
            </h6>
            <p class="card-text">{{ text }}</p>
            <a :href="uriFor([link])" class="card-link">点击查看更多</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { uriFor } from 'hexo-theme-lnote/templates/utils/uri'
const title = ''
const subtitle = ''
const text = ''
const link = ''
</script>
