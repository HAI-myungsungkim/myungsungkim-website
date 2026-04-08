// Admin Panel JavaScript
// Data storage
let websiteData = {
    profile: {},
    publications: [],
    projects: [],
    gallery: []
};

// Tab switching
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Profile image preview
document.addEventListener('DOMContentLoaded', function() {
    const profileImageInput = document.getElementById('profileImageUrl');
    if (profileImageInput) {
        profileImageInput.addEventListener('input', function(e) {
            const url = e.target.value;
            const preview = document.getElementById('profilePreview');
            if (url) {
                preview.innerHTML = `<img src="${url}" alt="Profile Preview" onerror="this.src='https://via.placeholder.com/180'">`;
            } else {
                preview.innerHTML = '';
            }
        });
    }
});

// Save profile
function saveProfile() {
    websiteData.profile = {
        imageUrl: document.getElementById('profileImageUrl').value,
        name: {
            en: document.getElementById('nameEn').value,
            ko: document.getElementById('nameKo').value
        },
        affiliation: {
            en: document.getElementById('affiliationEn').value,
            ko: document.getElementById('affiliationKo').value
        },
        email: document.getElementById('email').value,
        scholarUrl: document.getElementById('scholarUrl').value,
        githubUrl: document.getElementById('githubUrl').value,
        bio: {
            en: document.getElementById('bioEn').value,
            ko: document.getElementById('bioKo').value
        }
    };

    saveToLocalStorage();
    showSuccess();
}

// Add publication
let pubCounter = 0;
function addPublication() {
    pubCounter++;
    const pubsList = document.getElementById('publicationsList');
    const pubHTML = `
        <div class="pub-item" id="pub-${pubCounter}">
            <h4>논문 #${pubCounter}</h4>
            <div class="form-group">
                <label>논문 이미지 URL</label>
                <input type="url" class="pub-image" placeholder="https://... 또는 images/pub1.jpg">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>제목 (English)</label>
                    <input type="text" class="pub-title-en" placeholder="Paper Title">
                </div>
                <div class="form-group">
                    <label>제목 (Korean)</label>
                    <input type="text" class="pub-title-ko" placeholder="논문 제목">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>요약 (English)</label>
                    <textarea class="pub-summary-en" placeholder="Brief summary..." rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label>요약 (Korean)</label>
                    <textarea class="pub-summary-ko" placeholder="간단한 요약..." rows="3"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label>저자</label>
                <input type="text" class="pub-authors" placeholder="Author 1, Author 2, ...">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>게재지</label>
                    <input type="text" class="pub-venue" placeholder="Journal Name, Year">
                </div>
                <div class="form-group">
                    <label>저자 구분</label>
                    <select class="pub-badge">
                        <option value="first">First Author</option>
                        <option value="cofirst">Co-First Author</option>
                        <option value="second">Second Author</option>
                        <option value="third">Third Author</option>
                        <option value="status">Under Review/In Preparation</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>논문 링크 (Paper URL)</label>
                <input type="url" class="pub-paper-url" placeholder="https://...">
            </div>
            <div class="form-group">
                <label>DOI 링크</label>
                <input type="url" class="pub-doi-url" placeholder="https://doi.org/...">
            </div>
            <div class="pub-actions">
                <button class="btn btn-danger" onclick="removePublication(${pubCounter})">🗑️ 삭제</button>
            </div>
        </div>
    `;
    pubsList.insertAdjacentHTML('beforeend', pubHTML);
}

function removePublication(id) {
    if (confirm('이 논문을 삭제하시겠습니까?')) {
        document.getElementById(`pub-${id}`).remove();
    }
}

// Save publications
function savePublications() {
    websiteData.publications = [];
    document.querySelectorAll('#publicationsList .pub-item').forEach(item => {
        websiteData.publications.push({
            image: item.querySelector('.pub-image').value,
            title: {
                en: item.querySelector('.pub-title-en').value,
                ko: item.querySelector('.pub-title-ko').value
            },
            summary: {
                en: item.querySelector('.pub-summary-en').value,
                ko: item.querySelector('.pub-summary-ko').value
            },
            authors: item.querySelector('.pub-authors').value,
            venue: item.querySelector('.pub-venue').value,
            badge: item.querySelector('.pub-badge').value,
            paperUrl: item.querySelector('.pub-paper-url').value,
            doiUrl: item.querySelector('.pub-doi-url').value
        });
    });
    saveToLocalStorage();
    showSuccess();
}

// Add project
let projCounter = 0;
function addProject() {
    projCounter++;
    const projList = document.getElementById('projectsList');
    const projHTML = `
        <div class="pub-item" id="proj-${projCounter}">
            <h4>프로젝트 #${projCounter}</h4>
            <div class="form-group">
                <label>프로젝트 이미지 URL</label>
                <input type="url" class="proj-image" placeholder="https://... 또는 images/project1.jpg">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>프로젝트명 (English)</label>
                    <input type="text" class="proj-title-en" placeholder="Project Title">
                </div>
                <div class="form-group">
                    <label>프로젝트명 (Korean)</label>
                    <input type="text" class="proj-title-ko" placeholder="프로젝트 제목">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>설명 (English)</label>
                    <textarea class="proj-desc-en" placeholder="Project description..." rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label>설명 (Korean)</label>
                    <textarea class="proj-desc-ko" placeholder="프로젝트 설명..." rows="3"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label>프로젝트 링크 (선택)</label>
                <input type="url" class="proj-url" placeholder="https://...">
            </div>
            <div class="pub-actions">
                <button class="btn btn-danger" onclick="removeProject(${projCounter})">🗑️ 삭제</button>
            </div>
        </div>
    `;
    projList.insertAdjacentHTML('beforeend', projHTML);
}

function removeProject(id) {
    if (confirm('이 프로젝트를 삭제하시겠습니까?')) {
        document.getElementById(`proj-${id}`).remove();
    }
}

// Save projects
function saveProjects() {
    websiteData.projects = [];
    document.querySelectorAll('#projectsList .pub-item').forEach(item => {
        websiteData.projects.push({
            image: item.querySelector('.proj-image').value,
            title: {
                en: item.querySelector('.proj-title-en').value,
                ko: item.querySelector('.proj-title-ko').value
            },
            description: {
                en: item.querySelector('.proj-desc-en').value,
                ko: item.querySelector('.proj-desc-ko').value
            },
            url: item.querySelector('.proj-url').value
        });
    });
    saveToLocalStorage();
    showSuccess();
}

// Add gallery image
let galCounter = 0;
function addGalleryImage() {
    galCounter++;
    const galList = document.getElementById('galleryList');
    const galHTML = `
        <div class="pub-item" id="gal-${galCounter}">
            <h4>이미지 #${galCounter}</h4>
            <div class="form-group">
                <label>이미지 URL</label>
                <input type="url" class="gal-image" placeholder="https://... 또는 images/gallery1.jpg">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>캡션 (English)</label>
                    <input type="text" class="gal-caption-en" placeholder="Caption">
                </div>
                <div class="form-group">
                    <label>캡션 (Korean)</label>
                    <input type="text" class="gal-caption-ko" placeholder="캡션">
                </div>
            </div>
            <div class="pub-actions">
                <button class="btn btn-danger" onclick="removeGalleryImage(${galCounter})">🗑️ 삭제</button>
            </div>
        </div>
    `;
    galList.insertAdjacentHTML('beforeend', galHTML);
}

function removeGalleryImage(id) {
    if (confirm('이 이미지를 삭제하시겠습니까?')) {
        document.getElementById(`gal-${id}`).remove();
    }
}

// Save gallery
function saveGallery() {
    websiteData.gallery = [];
    document.querySelectorAll('#galleryList .pub-item').forEach(item => {
        websiteData.gallery.push({
            image: item.querySelector('.gal-image').value,
            caption: {
                en: item.querySelector('.gal-caption-en').value,
                ko: item.querySelector('.gal-caption-ko').value
            }
        });
    });
    saveToLocalStorage();
    showSuccess();
}

// LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('websiteData', JSON.stringify(websiteData));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('websiteData');
    if (saved) {
        websiteData = JSON.parse(saved);
        populateForm();
    }
}

function populateForm() {
    const profile = websiteData.profile;
    if (profile) {
        document.getElementById('profileImageUrl').value = profile.imageUrl || '';
        document.getElementById('nameEn').value = profile.name?.en || '';
        document.getElementById('nameKo').value = profile.name?.ko || '';
        document.getElementById('affiliationEn').value = profile.affiliation?.en || '';
        document.getElementById('affiliationKo').value = profile.affiliation?.ko || '';
        document.getElementById('email').value = profile.email || '';
        document.getElementById('scholarUrl').value = profile.scholarUrl || '';
        document.getElementById('githubUrl').value = profile.githubUrl || '';
        document.getElementById('bioEn').value = profile.bio?.en || '';
        document.getElementById('bioKo').value = profile.bio?.ko || '';
        
        // Trigger preview
        if (profile.imageUrl) {
            document.getElementById('profilePreview').innerHTML = 
                `<img src="${profile.imageUrl}" alt="Profile Preview" onerror="this.src='https://via.placeholder.com/180'">`;
        }
    }

    // Load publications
    if (websiteData.publications && websiteData.publications.length > 0) {
        websiteData.publications.forEach((pub, index) => {
            addPublication();
            const pubItem = document.querySelectorAll('#publicationsList .pub-item')[index];
            if (pubItem) {
                pubItem.querySelector('.pub-image').value = pub.image || '';
                pubItem.querySelector('.pub-title-en').value = pub.title?.en || '';
                pubItem.querySelector('.pub-title-ko').value = pub.title?.ko || '';
                pubItem.querySelector('.pub-summary-en').value = pub.summary?.en || '';
                pubItem.querySelector('.pub-summary-ko').value = pub.summary?.ko || '';
                pubItem.querySelector('.pub-authors').value = pub.authors || '';
                pubItem.querySelector('.pub-venue').value = pub.venue || '';
                pubItem.querySelector('.pub-badge').value = pub.badge || 'first';
                pubItem.querySelector('.pub-paper-url').value = pub.paperUrl || '';
                pubItem.querySelector('.pub-doi-url').value = pub.doiUrl || '';
            }
        });
    }

    // Load projects
    if (websiteData.projects && websiteData.projects.length > 0) {
        websiteData.projects.forEach((proj, index) => {
            addProject();
            const projItem = document.querySelectorAll('#projectsList .pub-item')[index];
            if (projItem) {
                projItem.querySelector('.proj-image').value = proj.image || '';
                projItem.querySelector('.proj-title-en').value = proj.title?.en || '';
                projItem.querySelector('.proj-title-ko').value = proj.title?.ko || '';
                projItem.querySelector('.proj-desc-en').value = proj.description?.en || '';
                projItem.querySelector('.proj-desc-ko').value = proj.description?.ko || '';
                projItem.querySelector('.proj-url').value = proj.url || '';
            }
        });
    }

    // Load gallery
    if (websiteData.gallery && websiteData.gallery.length > 0) {
        websiteData.gallery.forEach((gal, index) => {
            addGalleryImage();
            const galItem = document.querySelectorAll('#galleryList .pub-item')[index];
            if (galItem) {
                galItem.querySelector('.gal-image').value = gal.image || '';
                galItem.querySelector('.gal-caption-en').value = gal.caption?.en || '';
                galItem.querySelector('.gal-caption-ko').value = gal.caption?.ko || '';
            }
        });
    }
}

// Export data
function exportData() {
    const dataStr = JSON.stringify(websiteData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    const timestamp = new Date().toISOString().split('T')[0];
    link.download = `myungsungkim-website-data-${timestamp}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showSuccess('데이터가 다운로드되었습니다!');
}

// Import data
function importData() {
    const file = document.getElementById('importFile').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                websiteData = JSON.parse(e.target.result);
                saveToLocalStorage();
                showSuccess('데이터가 성공적으로 불러와졌습니다! 페이지를 새로고침합니다...');
                setTimeout(() => location.reload(), 1500);
            } catch (error) {
                alert('잘못된 JSON 파일입니다. 파일을 확인해주세요.');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
    } else {
        alert('파일을 선택해주세요.');
    }
}

// Preview site
function previewSite() {
    window.open('index.html', '_blank');
}

// Show success message
function showSuccess(message = '변경사항이 저장되었습니다!') {
    const msg = document.getElementById('successMessage');
    msg.textContent = '✅ ' + message;
    msg.classList.add('show');
    setTimeout(() => {
        msg.classList.remove('show');
    }, 3000);
}

// Initialize
window.addEventListener('load', () => {
    loadFromLocalStorage();
});
