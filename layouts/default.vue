<template>
    <div class="wrapper">
        <Header />
        <div>
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
// SEO初期設定
useSeoMeta({
  title: "kamachi's portfolio",
  ogTitle: "kamachi's portfolio",
  description: 'かまちのポートフォリオ',
  ogDescription: 'かまちのポートフォリオ',
  ogImage: 'https://***.***/images/ogp.png',
  twitterCard: 'summary_large_image',
});
</script>