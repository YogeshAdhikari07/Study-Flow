const menubtn = document.getElementById('menubtn');
const closeMenuBtn = document.getElementById('closemenu');
const searchBox = document.getElementById('searchBox');
const resultBox = document.getElementById('resultBox');
const iframediv = document.getElementById('iframediv');
const iframeBox = document.getElementById('iframe');
async function search() {
    try {
        resultBox.innerHTML="";
        iframeBox.src='';
        const value = searchBox.value.trim();
        if (!value) { return; }
        const res = await fetch(`/api/studyground/ytdata?value=${value}`, { method: 'GET' });
        const data = await res.json();
        const ytdata = data['data']['items'];
        ytdata.forEach((videoData) => {
            const div = document.createElement('div'); div.id = `${videoData.id.videoId}`; div.classList.add('bg-[#242424]', 'flex', 'flex-col', 'lg:flex-row', 'py-3', 'px-3', 'gap-2', 'rounded-2xl','items-start');
            div.addEventListener('click', () => {
                resultBox.classList.add('hidden');
                iframediv.classList.remove('hidden');
                iframeBox.src= `https://www.youtube.com/embed/${videoData.id.videoId}`
            })
            const img = document.createElement('img'); img.src = `${videoData.snippet.thumbnails.medium.url}`; img.classList.add("aspect-16/9", "rounded-2xl",'w-full' ,'lg:w-auto');
            const span = document.createElement('span'); span.classList.add("flex", "flex-col", "gap-2");
            const h1 = document.createElement('h1'); h1.textContent = `${videoData.snippet.title}`;
            const h2 = document.createElement('h1'); h2.textContent = `${videoData.snippet.channelTitle}`; h2.classList.add('text-sm');
            span.appendChild(h1);
            span.appendChild(h2);
            div.appendChild(img);
            div.appendChild(span);
            resultBox.appendChild(div);
        });
        iframediv.classList.add('hidden');
        resultBox.classList.remove('hidden');
    }
    catch (err) { console.log(err) }
}
closeMenuBtn.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('flex');
    document.getElementById('menu').classList.add('hidden')
    document.getElementById('menu').classList.remove('flex-1');
    document.getElementById('hero').classList.remove('hidden');
});
menubtn.addEventListener('click', () => {
    document.getElementById('menu').classList.add('flex');
    document.getElementById('menu').classList.remove('hidden')
    document.getElementById('menu').classList.add('flex-1');
    document.getElementById('hero').classList.add('hidden');
});