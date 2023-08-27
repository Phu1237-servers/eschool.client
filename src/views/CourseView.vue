<template>
  <div class="flex flex-1 flex-col md:pl-64">
    <TheTopbar />

    <main class="flex-1">
      <div class="py-6">
        <BoxContainer>
          <div class="flex h-96">
            <div class="flex-1 h-full">
              <video
                class="h-full w-full bg-black"
                src="https://public.bl.files.1drv.com/y4m43KTudinuu1WzZo55m9gZR2KMfBK6eeK8yS36anhFFj2P9giK1Dco29ZSxZaIlZ6_bwYbxZv16ylZiaZsYkJkf9CCZbZO3l4sS_mlxtE4G-Mln2gOfGxfU0JrYScOTII80huWo-qK0kJ4eRAJX8svBOvifx7Q5UNq8pKgHO6QTf1iWFHVTJbeiYmeKD3BRMa43YnmSdTt4J7D-TjjNuk4T3k1le7TQSSosSckXZNLKw"
                controls="true"
              />
            </div>
            <div class="flex-initial flex flex-col ml-2 border border-1 border-solid">
              <header class="p-1 text-base font-bold border-b-[1px] border-solid">Chapters</header>
              <div class="overflow-auto">
                <section class="p-1 flex hover:bg-gray-200" v-for="index in 10" :key="index">
                  <div class="thumbnail flex-initial">
                    <img
                      src="https://i.ytimg.com/vi/9xG5aPvrS-k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQrZcF9LcgEyyAcXr3szhX_4gVog"
                    />
                  </div>
                  <div class="information flex-1 mx-2">
                    <div class="title">It's Not Like I Like You!! (♪♫)</div>
                    <div class="duration">4:06</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div>
            <div>It's Not Like I Like You!!</div>
          </div>
        </BoxContainer>
        <BoxContainer title="Other courses in related to the level of this course">
          <GridList :data="products" />
        </BoxContainer>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheTopbar from '@/components/TheTopbar.vue'
import BoxContainer from '@/components/Common/BoxContainer.vue'
import GridList from '@/components/Common/GridList.vue'
const products = [
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.'
  },
  {
    id: 2,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '1:00',
    imageSrc:
      'https://phx02pap003files.storage.live.com/y4mcJ-ZK8HXEKJKgCPVG4LjizG6-q_E1HTUPqM8b0dT4cRkTv75LTXGfgAsLxGP4K2vAKaYCsibZVHRmp572dXJxHxtkoyM7RA4UKQMPX5Z1BWMH02eXsa4rOfDNxDW5dDB8tNKX9TIOKWvbM1iYZRwn9fZiubkXe4hH_yTfflicUtK_IlrAh58DVUiT8_gIZEc57qyEhuCISZHHogJvFNPFw?width=800&height=450&cropmode=none',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.'
  }

  // More products...
]
</script>
