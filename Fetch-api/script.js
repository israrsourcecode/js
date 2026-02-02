function getUsers() {
    fetch("https://randomuser.me/api/?results=3")
        .then((raw) => raw.json())
        .then((data) => {
            console.log(data.results);
            document.querySelector(".users").innerHTML = ''
            data.results.forEach(user => {
                // Main card container
                const card = document.createElement("div");
                card.className = "w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden";

                // Top section with avatar and info
                const topSection = document.createElement("div");
                topSection.className = "flex items-center p-6 space-x-4";

                // Avatar
                const avatar = document.createElement("img");
                avatar.className = "w-16 h-16 rounded-full object-cover ring-2 ring-white dark:ring-gray-700 shadow-sm";
                avatar.src = user.picture.large;
                avatar.alt = "Avatar";

                // Info container
                const info = document.createElement("div");
                info.className = "flex-1";

                // Name
                const name = document.createElement("h3");
                name.className = "text-lg font-semibold text-gray-900 dark:text-white";
                name.textContent = user.name.first;

                // Role
                const role = document.createElement("p");
                role.className = "text-sm text-gray-500 dark:text-gray-300";
                role.textContent = user.email;

                // Buttons container
                const buttonContainer = document.createElement("div");
                buttonContainer.className = "mt-3 flex space-x-2";

                // Follow button
                const followBtn = document.createElement("a");
                followBtn.href = "#";
                followBtn.className = "inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700";
                followBtn.textContent = "Follow";

                // Message button
                const messageBtn = document.createElement("a");
                messageBtn.href = "#";
                messageBtn.className = "inline-flex items-center px-3 py-1.5 border border-gray-200 dark:border-gray-700 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700";
                messageBtn.textContent = "Message";

                // Append buttons to container
                buttonContainer.append(followBtn, messageBtn);

                // Append name, role, buttons to info
                info.append(name, role, buttonContainer);

                // Append avatar and info to top section
                topSection.append(avatar, info);

                // Bottom section with bio and stats
                const bottomSection = document.createElement("div");
                bottomSection.className = "px-6 pb-6";

                // Bio
                const bio = document.createElement("p");
                bio.className = "text-sm text-gray-700 dark:text-gray-300";
                bio.textContent = "Passionate about creating intuitive interfaces and delightful user experiences. Coffee enthusiast and open-source contributor.";

                // Stats grid
                const statsGrid = document.createElement("div");
                statsGrid.className = "mt-4 grid grid-cols-3 text-center divide-x divide-gray-100 dark:divide-gray-700";

                // Followers
                const followers = document.createElement("div");
                followers.className = "px-2";
                followers.innerHTML = `<p class="text-lg font-bold text-gray-900 dark:text-white">1.2k</p>
<p class="text-xs text-gray-500 dark:text-gray-300">Followers</p>`;

                // Following
                const following = document.createElement("div");
                following.className = "px-2";
                following.innerHTML = `<p class="text-lg font-bold text-gray-900 dark:text-white">210</p>
<p class="text-xs text-gray-500 dark:text-gray-300">Following</p>`;

                // Posts
                const posts = document.createElement("div");
                posts.className = "px-2";
                posts.innerHTML = `<p class="text-lg font-bold text-gray-900 dark:text-white">35</p>
<p class="text-xs text-gray-500 dark:text-gray-300">Posts</p>`;

                // Append stats to grid
                statsGrid.append(followers, following, posts);

                // Append bio and stats grid to bottom section
                bottomSection.append(bio, statsGrid);

                // Append top and bottom sections to card
                card.append(topSection, bottomSection);

                // Finally, append card to body
                document.querySelector(".users").appendChild(card);

            });
        })

}
getUsers()
document.querySelector(".refresh-btn").addEventListener("click", function () {
    getUsers()
})