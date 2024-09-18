<script setup lang="ts">
import BlogHeader from "../../components/BlogHeader.vue";
</script>

<template>
  <BlogHeader
    :title="'AA Battery Replacer'"
    :author="'Jacob Kelly'"
    :date="'August 9, 2024'"
    :tags="['Circuit', 'PCB Design', 'Solo']"
    :title_src="'/battery-replacer-v1-pcb.png'"
    :author_src="'/jacobkelly_head.png'"
  />
  <div class="flex justify-center">
    <div class="flex flex-col px-10 md:px-28 py-8 max-w-sm md:max-w-7xl">
      <div>
        <h1 class="text-3xl font-bold py-4 font-serif">About</h1>
        <p class="indent-8 text-lg leading-relaxed">
          The AA battery replacer, as the name suggests, is designed to replace
          the use of a AA or AAA battery in devices with a rechargeable 3.7V
          lithium-ion battery. This solution an provide a longer battery life,
          flexibility in charging solutions, and a more sustainable approach, as
          most AA/AAA batteries are thrown in the trash instead of recycled.
        </p>
        <p class="indent-8 text-lg leading-relaxed">
          My goal for this project was to replace the AA battery in my mouse and
          enable wireless charging, effectively removing the need to
          charge/replace the battery, allowing a near continuous runtime. You
          can check out the project files
          <a
            href="https://github.com/Jakobabs/AA-Battery-Replacer"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >here</a
          >.
        </p>
      </div>
      <div class="divider" />
      <div>
        <h2 class="text-3xl font-bold py-4 font-serif">Technical Details</h2>
        <p class="text-xl font-bold py-2">V1</p>
        <p class="indent-8 text-lg leading-relaxed">
          In designing this PCB, I decided to use the Texas Instruments BQ24072
          as the battery charger, and the TLV70015 as the LDO. The BQ24072 was
          uniquely selected in that it separates the battery input from the
          output, and has an internal dynamic power path management (DPPM) that
          allows the output to draw from the charger if it can supply enough
          power to the device and charge the battery, thus improving battery
          life by reduced charge/discharge cycles. The LDO could be easily
          replaced with the TLV70030 to provide 3.0V in the case that the device
          uses two series AA batteries. To get wireless charging, connect a Qi
          receiver to the 5V in pin.
        </p>
        <div class="flex flex-col justify-center items-center gap-6 py-6">
          <div class="flex flex-col">
            <img
              class="max-w-xs md:max-w-xl"
              :src="'/battery-replacer-v1.png'"
            />
            <p class="text-center italic p-2">
              AA Battery Replacer V1 Schematic
            </p>
          </div>
          <div class="flex flex-col">
            <img
              class="max-w-xs md:max-w-xl"
              :src="'/battery-replacer-v1-pcb.png'"
            />
            <p class="text-center italic p-2">AA Battery Replacer V1 PCB</p>
          </div>
        </div>
        <p class="text-xl font-bold py-2">V2</p>
        <p class="indent-8 text-lg leading-relaxed">
          After designing and using the product for over a year, I decided to
          revisit the project, to improve the design. With V1, there are two
          minor flaws with the design.
        </p>
        <ul class="pl-12 text-lg pt-3 leading-relaxed">
          <li>
            1. The battery charger IC does not communicate with the wireless
            charging module, so the Qi receiver still requests power, when none
            is needed, leading to access energy waste.
          </li>
          <li>
            2. The LDO outputs a fixed voltage, so the device thinks the battery
            is always at ~60%, leading to the device turning off without
            warning.
          </li>
        </ul>
        <p class="indent-8 text-lg pt-3 leading-relaxed">
          To fix the first issue, I needed to map the lithium-ion battery's
          4.2-3V range onto the AA's 1.7-1.2V. This would be a gain of 0.4,
          resulting in 1.68-1.2V. Since LDO's and buck converters rarely output
          in relation to the input, the only solution was to use an op-amp. A
          positive gain of less than 1 is impossible, so I decided to use a
          voltage divider followed by a unity gain buffer amp. This allowed me
          to use a high resistance divider to minimize power loss, while still
          providing current to the device. I chose the TLV9041 for it's low
          quiescent current. With a resistive divider of 400kΩ + 600kΩ, the
          total Iq is 14.2 uA, 16.8 uA less than V1!
        </p>
        <p class="indent-8 text-lg pt-3 leading-relaxed">
          Issue #2 had a very simple solution. Instead of purchasing a Qi
          receiver module, I would design my own module so that if the current
          draw falls below a threshold, it terminates the Qi connection. I chose
          the STWLC68JRH Qi receiver for this design.
        </p>
        <div class="flex flex-col justify-center items-center gap-6 py-6">
          <div class="flex flex-col">
            <img class="max-w-xs md:max-w-xl" />
            <p class="text-center italic p-2">
              AA Battery Replacer V2 Schematic
            </p>
          </div>
          <div class="flex flex-col">
            <img class="max-w-xs md:max-w-xl" />
            <p class="text-center italic p-2">AA Battery Replacer V2 PCB</p>
          </div>
        </div>
      </div>
      <div class="divider" />
    </div>
  </div>
</template>
