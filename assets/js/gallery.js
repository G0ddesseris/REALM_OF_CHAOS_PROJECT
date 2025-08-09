document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const videoGrid = document.getElementById('videoGrid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbers = document.getElementById('pageNumbers');
    
    // Pagination settings
    const VIDEOS_PER_PAGE = 12;
    let currentPage = 1;
    let filteredVideos = [];
    let activeFilter = 'all';
    let searchTerm = '';
    
    // Sample video data - Replace with your actual video data
    const videoData = [
        // Format: { id, title, embedCode, tags: [] }
        {
            id: 'cTiUqinIUgA',
            title: 'Temptation Desire',
            embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://go.screenpal.com/player/cTiUqinIUgA" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
            tags: ['gooner', 'pmv', 'premium']
        },
        // Add more videos here...
    ];
    
    // Initialize the gallery
    function init() {
        filteredVideos = [...videoData];
        renderVideos();
        setupEventListeners();
    }
    
    // Render videos to the grid
    function renderVideos() {
        // Clear the grid
        videoGrid.innerHTML = '';
        
        // Calculate pagination
        const startIdx = (currentPage - 1) * VIDEOS_PER_PAGE;
        const endIdx = startIdx + VIDEOS_PER_PAGE;
        const videosToShow = filteredVideos.slice(startIdx, endIdx);
        
        // Render each video
        videosToShow.forEach(video => {
            const videoCard = createVideoCard(video);
            videoGrid.appendChild(videoCard);
        });
        
        // Update pagination
        updatePagination();
    }
    
    // Create a video card element
    function createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-container">
                ${video.embedCode}
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-tags">
                    ${video.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        return card;
    }
    
    // Filter videos based on active filter and search term
    function filterVideos() {
        filteredVideos = videoData.filter(video => {
            // Filter by search term
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            
            // Filter by active filter
            const matchesFilter = activeFilter === 'all' || video.tags.includes(activeFilter);
            
            return matchesSearch && matchesFilter;
        });
        
        // Reset to first page when filters change
        currentPage = 1;
        renderVideos();
    }
    
    // Update pagination controls
    function updatePagination() {
        const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
        
        // Update previous/next buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
        
        // Update page numbers
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.className = i === currentPage ? 'active' : '';
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderVideos();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(pageBtn);
        }
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.trim();
            filterVideos();
        });
        
        // Filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.dataset.filter;
                filterVideos();
            });
        });
        
        // Pagination buttons
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderVideos();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
            if (currentPage < totalPages) {
                currentPage++;
                renderVideos();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    // Initialize the gallery
    init();
});
