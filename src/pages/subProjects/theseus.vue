<script setup lang="ts">
import BlogHeader from "../../components/BlogHeader.vue";
</script>

<template>
  <BlogHeader
    :title="'Project Theseus'"
    :author="'Jacob Kelly'"
    :date="'June 24, 2024'"
    :tags="['Full Stack', 'Contributor']"
    :title_src="'https://cdn-raw.modrinth.com/app-landing/app-screenshot.webp'"
    :author_src="'/jacobkelly_head.png'"
  />
  <div class="flex justify-center">
    <div class="flex flex-col px-10 md:px-28 py-8 max-w-sm md:max-w-7xl">
      <div>
        <h1 class="text-3xl font-bold py-4 font-serif">About</h1>
        <p class="indent-8 text-lg leading-relaxed">
          Theseus (publicly known as Modrinth App) is an open source launcher
          for the popular game, Minecraft. Theseus provides a powerful
          alternative to the original (Mojang) launcher, focusing on its
          modding support. Integrating with Modrinth's mod hosting website, it
          allows users to install Minecraft mods from within the launcher, all
          from the click of a button. The Modrinth Team's focus on performance,
          along with an attractive UI, makes Theseus the optimal choice for
          Minecraft modding. You can check it out at
          <a
            href="https://modrinth.com/app"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >modrinth.com/app</a
          >. Theseus is a web app built using the Tuari framework to provide a
          fast frontend with Vue.js, and a powerful backend in Rust.
        </p>
      </div>
      <div class="divider" />
      <div>
        <h2 class="text-3xl font-bold py-4 font-serif">Backstory</h2>
        <p class="indent-8 text-lg leading-relaxed">
          For a long while I have been following the Minecraft modding
          community. I started to mod video games from a young age and became
          familiar with the process. When Modrinth first launched their app, I
          was reluctant to use it, as I already knew how to mod and the horrible
          UI of other community launchers deterred me. Yet after using their
          website to download mods, I decided to try it out.
        </p>
        <p class="indent-8 text-lg pt-3 leading-relaxed">
          To my surprise, the launcher was very good. It loaded faster than the
          Mojang launcher, and installing mods was far less time consuming. But,
          there was one issue I found: Theseus lacked the option to change your
          player's skin. This feature is Minecraft's way to modify the look of
          your character which is a feature I enjoyed from the Mojang launcher. After
          finding out that there were no current plans to add this feature, I
          contacted the Modrinth Team and received permission to develop the
          feature.
        </p>
      </div>
      <div class="divider" />
      <div>
        <h3 class="text-3xl font-bold py-4 font-serif">Contributions</h3>
        <p class="indent-8 text-lg leading-relaxed">
          On January 8th, 2024 I contacted the Modrinth Team and started
          developing the project. The project code can be found on my
          <a
            href="https://github.com/Jakobabs/theseus"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >fork</a
          >, until it is merged into the main branch. I attest that all code
          contributed by me, is my own work. The skin manager icon was provided
          by
          <a
            href="https://github.com/rowandevving"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >Rowan</a
          >
          for full use, and modified by
          <a
            href="https://github.com/MulesGaming"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >MulesGaming</a
          >. I wanted the Theseus skin manager to have the same features as the
          Mojang launcher, so I created the following criteria:
        </p>
        <ul class="pl-12 text-lg pt-3 leading-relaxed">
          <li class="font-semibold">Design Features</li>
          <li>&bullet; Upload skin and select skin options</li>
          <li>&bullet; Locally store user saved skins</li>
          <li>&bullet; Import skins from other launchers</li>
          <li>&bullet; UI to view saved skins</li>
          <li class="indent-16">&rarr; Sorting and filtering</li>
          <li class="indent-16">&rarr; 3D skin viewer</li>
        </ul>
        <p class="indent-8 text-lg py-3 leading-relaxed">
          Mojang provides the API for account services
          <a
            href="https://wiki.vg/Mojang_API"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >here</a
          >. Using this we can send http requests to set/get the player's skin.
          The API requires an access token, which is obtained by Theseus when
          the player logs-in. Below is an http request to get the player's
          details, which contains the current skin. ("{token}" is the variable
          storing the actual token string).
        </p>
        <div class="flex justify-center">
          <div class="mockup-code max-w-2xl">
            <pre
              data-prefix="1"
            ><code class="text-success">// http request to get player info</code></pre>
            <pre
              data-prefix="2"
            ><code>let response: Value = reqwest::Client::new()</code></pre>
            <pre
              class="indent-12"
            ><code>.get("https://api.minecraftservices.com/minecraft/profile")</code></pre>
            <pre
              class="indent-12"
            ><code>.header(header::AUTHORIZATION, format!("Bearer {token}"))</code></pre>
            <pre class="indent-12"><code>.send().await.unwrap()</code></pre>
            <pre class="indent-12"><code>.json().await.unwrap();</code></pre>
          </div>
        </div>
        <p class="indent-8 text-lg py-3 leading-relaxed">
          Setting the player's skin is similar to the above code block, with the png image base64
          encoded into a JSON multipart. When saving skins I decided on storing
          them in a JSON file, with the base64 encoded skin, 3D render of the
          skin, and a name. This method has its advantages, where the 3D render
          is displayed to the end user to allow them to switch between saved
          skins and JSON allows fast parsing to get the stored skin and send it
          to the API.
        </p>
        <div class="flex justify-center py-6">
          <img class="max-w-xs md:max-w-2xl" :src="'/theseus1.png'" />
        </div>
        <p class="indent-8 text-lg py-3 leading-relaxed">
          The above image shows the skin manager UI page where the leftmost
          skin is the user's current skin and the others are the saved skins.
          Left clicking a skin card sends the http request to the API which
          contains the base64 encoded image shown in the 3D renderer. Right clicking shows a
          context menu that allows the user to modify or delete the save. Above
          the skins are search, sort, and filter options. In addition to the skin
          manager, I created a system to allow users to set a custom order in
          which their saved skins are displayed. This feature originally was
          supposed to support drag-n-drop with the cards to reorder them, but
          due to an issue with EdgeView2, which Tauri uses, drag-n-drop is
          incompatible. This feature may be implemented once the upstream bug
          gets resolved.
        </p>
        <div class="flex justify-center py-6">
          <img class="max-w-xs md:max-w-2xl" :src="'/theseus2.png'" />
        </div>
        <p class="indent-8 text-lg py-3 leading-relaxed">
          The next image shows the user uploading a new skin to either use or
          save to the skin manager. The texture in the top left of the image is
          the raw skin png, whereas to the right of it is the 3D render of the
          texture. 'Arm style' is a feature with Minecraft skins that change the
          size of the arms, and the 'cape' list is different for each player.
          Most capes are rewarded to specific players for various reasons so
          this list only displays the capes the current user has unlocked. This
          information is learned when doing the http request shown in the code
          block above.
        </p>
        <p class="indent-8 text-lg py-3 leading-relaxed">
          Currently the project is in its final stages, where I am working with
          the Modrinth Team to merge my fork into the master branch. I'll update
          this post when we have accomplished this.
        </p>
      </div>
      <div class="divider" />
    </div>
  </div>
</template>
