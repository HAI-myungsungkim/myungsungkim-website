# Myungsung Kim - Academic Personal Website

> 🌐 Clean, minimal academic portfolio with bilingual support (English/Korean)

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://www.myungsungkim.com)
[![Language](https://img.shields.io/badge/languages-EN%20%7C%20KO-blue)](https://www.myungsungkim.com)
[![Admin Panel](https://img.shields.io/badge/admin-panel-purple)](https://www.myungsungkim.com/admin.html)

---

## 📋 Overview

**www.myungsungkim.com**은 김명성 연구자의 학술 포트폴리오 웹사이트입니다. 

Clean, minimal 디자인으로 연구, 논문, 프로젝트, 학회 발표를 한눈에 보여줍니다. [daehwakim.com](https://daehwakim.com/)의 디자인에서 영감을 받아 제작되었습니다.

### ✨ Key Features

- **🌍 Bilingual Support**: Toggle between English and Korean with one click
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile
- **🎨 Minimal Design**: Clean typography inspired by daehwakim.com
- **🎛️ Admin Panel**: Easy content management with visual interface
- **⚡ Fast Loading**: Lightweight, no external dependencies except fonts
- **🖼️ Gallery with Lightbox**: Click to expand images
- **🔄 Auto Deploy**: GitHub → Netlify automatic deployment

---

## 🚀 Quick Start

### 📦 완전 초보자를 위한 3단계 배포

#### 1️⃣ GitHub에 코드 올리기
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) 참고
- GitHub Desktop 사용 (가장 쉬움)

#### 2️⃣ Netlify로 배포하기
- GitHub 연동 (1분 소요)
- 자동 배포 설정

#### 3️⃣ 도메인 연결
- www.myungsungkim.com DNS 설정
- HTTPS 자동 적용

**👉 자세한 단계별 가이드**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## 🎨 Admin Panel 사용하기

### 관리자 모드로 쉽게 콘텐츠 관리!

#### 접속 방법
- **로컬**: `admin.html` 파일 열기
- **온라인**: https://www.myungsungkim.com/admin.html

#### 할 수 있는 것
- ✅ 프로필 사진 변경
- ✅ 논문 추가/수정/삭제
- ✅ 프로젝트 관리
- ✅ 갤러리 이미지 관리
- ✅ 데이터 백업 & 복원 (JSON)

**👉 자세한 사용법**: [ADMIN_GUIDE.md](ADMIN_GUIDE.md)

---

## 📁 File Structure

```
myungsungkim-website/
├── index.html                  # Main website page
├── admin.html                  # Admin panel for content management
├── css/
│   └── style.css              # All styling
├── js/
│   ├── main.js                # Language toggle & interactions
│   └── admin.js               # Admin panel functionality
├── images/                     # Your images (create this folder)
│   ├── profile.jpg
│   ├── pub1.png
│   └── gallery/
├── DEPLOYMENT_GUIDE.md         # Step-by-step deployment guide
├── ADMIN_GUIDE.md              # Admin panel user guide
└── README.md                   # This file
```

---

## 🎯 완전 초보자 가이드 (Step by Step)

이 섹션은 웹 개발이나 GitHub를 처음 사용하는 분들을 위한 가이드입니다.

### 🎬 Step 1: 로컬에서 웹사이트 확인하기

1. **index.html 파일을 더블클릭하여 브라우저에서 열기**
2. 웹사이트가 정상적으로 보이는지 확인
3. 언어 전환 버튼 (한국어/English) 테스트

### 🎬 Step 2: Admin Panel에서 내용 수정하기

1. **admin.html 파일을 더블클릭하여 열기**
2. **프로필 탭**에서:
   - 프로필 사진 URL 입력 (Imgur 추천)
   - 이름, 소속, 이메일 입력
   - 자기소개 작성
3. **논문 탭**에서:
   - "논문 추가" 버튼 클릭
   - 논문 정보 입력
4. **저장 버튼 클릭**
5. **"JSON 내보내기"로 데이터 백업**

### 🎬 Step 3: GitHub에 업로드하기

**옵션 A: GitHub Desktop 사용 (추천)**

1. [GitHub Desktop 다운로드](https://desktop.github.com/)
2. GitHub 계정으로 로그인
3. File → New Repository
   - Name: `myungsungkim-website`
   - Local Path: 프로젝트 폴더 선택
4. 파일 복사 (index.html, css/, js/, admin.html 등)
5. "Commit to main" → "Publish repository"

**옵션 B: GitHub 웹사이트 사용**

1. [GitHub.com](https://github.com) 로그인
2. "New repository" 클릭
3. Repository name: `myungsungkim-website`
4. "Upload files" 클릭
5. 모든 파일 드래그 앤 드롭
6. "Commit changes" 클릭

📚 **자세한 내용**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### 🎬 Step 4: Netlify로 배포하기

1. [Netlify.com](https://www.netlify.com) 접속
2. "Sign up with GitHub" (무료)
3. "Add new site" → "Import an existing project"
4. "Deploy with GitHub" 선택
5. 저장소 선택: `myungsungkim-website`
6. "Deploy site" 클릭
7. 1-2분 후 배포 완료! 

**임시 URL**: `https://random-name-123.netlify.app`

### 🎬 Step 5: 커스텀 도메인 연결하기

1. Netlify 대시보드 → "Domain settings"
2. "Add custom domain" → `www.myungsungkim.com` 입력
3. DNS 설정 정보 확인
4. 도메인 제공업체 (가비아, GoDaddy 등)에서 DNS 설정:
   ```
   Type: CNAME
   Name: www
   Value: [Netlify가 제공한 URL]
   ```
5. 10분~1시간 후 SSL 자동 적용
6. **https://www.myungsungkim.com** 접속!

📚 **자세한 DNS 설정**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### 🎬 Step 6: 내용 업데이트하기 (앞으로)

**간단한 방법:**

1. Admin Panel에서 수정
2. "JSON 내보내기"로 백업
3. index.html 수동 수정 (JSON 참고)
4. GitHub Desktop에서 "Commit" → "Push"
5. Netlify가 자동으로 재배포 (1-2분)

**자동화된 방법 (추후 구현):**

- content.json 파일 사용
- JavaScript가 자동으로 페이지 렌더링
- index.html 수정 불필요!

---

## 🎨 고급 커스터마이징 (개발자용)

### 1️⃣ **Update Personal Information**

Open `index.html` and search for:

```html
<!-- Update profile image -->
<img src="https://via.placeholder.com/180" alt="Profile">
<!-- Replace with your photo URL -->

<!-- Update name -->
<h1 class="name" data-en="Myungsung Kim" data-ko="김명성">

<!-- Update affiliation -->
<p class="affiliation" data-en="UNIST..." data-ko="UNIST...">

<!-- Update contact -->
<a href="mailto:your-email@unist.ac.kr">
```

### 2️⃣ **Add/Edit Publications**

Each publication has this structure:

```html
<div class="pub-item">
    <div class="pub-image">
        <img src="YOUR_IMAGE_URL" alt="Publication thumbnail">
    </div>
    <div class="pub-content">
        <div class="pub-badges">
            <span class="badge badge-first">First Author</span>
        </div>
        <h4 class="pub-title">Your Paper Title</h4>
        <p class="pub-summary" 
           data-en="English summary here" 
           data-ko="한글 요약">
            English summary here
        </p>
        <p class="pub-venue">Journal Name, Year</p>
        <p class="pub-authors">Author List</p>
        <div class="pub-links">
            <a href="#" target="_blank">Paper</a>
            <a href="#" target="_blank">DOI</a>
        </div>
    </div>
</div>
```

**Badge Types**:
- `badge-first` → First Author (blue)
- `badge-cofirst` → Co-First Author (purple)
- `badge-second` / `badge-third` → Other positions (gray)
- `badge-status` → Under Review / In Preparation (yellow)

### 3️⃣ **Upload Images**

**Method 1: Imgur (Easiest)**
1. Go to [imgur.com/upload](https://imgur.com/upload)
2. Drag & drop your image
3. Right-click → "Copy image address"
4. Paste URL into `<img src="...">`

**Method 2: Project Folder**
1. Create `images/` folder next to `index.html`
2. Save images: `images/profile.jpg`, `images/pub1.png`, etc.
3. Use relative paths: `<img src="images/profile.jpg">`

### 4️⃣ **Change Colors**

Edit `css/style.css`:

```css
:root {
    --color-accent: #2563eb;  /* Change to any color */
    --color-bg: #ffffff;      /* Background color */
    --color-text: #1a1a1a;    /* Text color */
}
```

### 5️⃣ **Add Gallery Photos**

```html
<div class="gallery-item">
    <img src="YOUR_IMAGE_URL" alt="Description">
    <p class="gallery-caption" 
       data-en="English caption" 
       data-ko="한글 캡션">
        English caption
    </p>
</div>
```

---

---

## 🔧 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Minimal, Clean (inspired by daehwakim.com)
- **Fonts**: Google Fonts (Inter, Crimson Text)
- **Hosting**: Netlify (with auto-deploy from GitHub)
- **Domain**: www.myungsungkim.com
- **Admin**: Custom-built Admin Panel

---

## 📸 스크린샷

### Main Website
![Website Preview](https://via.placeholder.com/800x400?text=Main+Website)

### Admin Panel
![Admin Panel](https://via.placeholder.com/800x400?text=Admin+Panel)

---

## 🔄 업데이트 워크플로우

### 정기 업데이트 (추천: 주 1회)

```
1. admin.html 접속
   ↓
2. 내용 수정 (논문, 프로젝트 추가)
   ↓
3. "저장" 클릭
   ↓
4. "JSON 내보내기" (백업)
   ↓
5. index.html 수정
   ↓
6. GitHub Desktop: Commit → Push
   ↓
7. Netlify 자동 배포 (1-2분)
   ↓
8. www.myungsungkim.com 확인
```

### 긴급 수정

```
1. GitHub.com 접속
   ↓
2. index.html 직접 수정
   ↓
3. Commit changes
   ↓
4. Netlify 자동 배포
```

---

## 🛠️ 문제 해결 (Troubleshooting)

### ❌ 사이트가 안 보여요
- **해결**: 브라우저 캐시 삭제 (Ctrl+Shift+R)
- **확인**: index.html이 최상위 폴더에 있는지 확인

### ❌ 이미지가 안 보여요
- **해결**: Imgur URL이 정확한지 확인
- **확인**: 로컬 이미지는 GitHub에 업로드되었는지 확인

### ❌ DNS 설정이 안 돼요
- **해결**: 24시간 대기 (DNS 전파 시간)
- **확인**: [DNS Checker](https://dnschecker.org/)에서 확인

### ❌ Netlify 배포가 실패해요
- **해결**: Netlify 대시보드에서 배포 로그 확인
- **확인**: index.html 문법 오류 확인

---

## 📚 상세 가이드 문서

| 문서 | 내용 | 대상 |
|------|------|------|
| [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) | GitHub → Netlify → 도메인 연결 | 초보자 |
| [ADMIN_GUIDE.md](ADMIN_GUIDE.md) | Admin Panel 사용법 | 모든 사용자 |
| [README.md](README.md) | 프로젝트 전체 개요 | 모든 사용자 |

---

## 🤝 향후 개선 계획

### 단기 (1-2주)
- [x] Admin Panel 구현
- [x] 배포 가이드 작성
- [ ] CV 데이터를 실제 콘텐츠로 반영
- [ ] content.json 자동 렌더링 구현
- [ ] 이미지 최적화

### 중기 (1개월)
- [ ] Google Scholar API 연동 (자동 논문 업데이트)
- [ ] Admin Panel 비밀번호 보호
- [ ] 블로그 섹션 추가
- [ ] 방문자 통계 (Google Analytics)

### 장기 (3개월+)
- [ ] 다크 모드 지원
- [ ] 논문 검색 기능
- [ ] RSS 피드
- [ ] 다국어 지원 확장 (일본어, 중국어)

---

## 🔒 보안 주의사항

- ⚠️ Admin Panel은 현재 비밀번호 보호가 없습니다
- 🔐 URL을 공개하지 마세요 (admin.html)
- 💾 정기적으로 데이터 백업 (JSON 내보내기)
- 🛡️ Netlify Password Protection 사용 권장

---

## 📞 지원 및 문의

### 🆘 도움이 필요하면?

- **GitHub 이슈**: [이슈 등록하기](https://github.com/yourusername/myungsungkim-website/issues)
- **이메일**: your-email@unist.ac.kr
- **유용한 링크**:
  - [Imgur 가이드](https://imgur.com/upload)
  - [GitHub Desktop 문서](https://docs.github.com/desktop)
  - [Netlify 문서](https://docs.netlify.com/)

---

## 📝 라이선스

This website template is free to use for personal academic websites.

---

## 🎉 Credits

- **Design Inspiration**: [daehwakim.com](https://daehwakim.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Crimson Text)
- **Developer**: Built for Myungsung Kim's academic portfolio
- **Tools**: GitHub, Netlify, Imgur

---

## 📈 프로젝트 현황

### ✅ 완료된 기능

- [x] 반응형 웹 디자인
- [x] 영문/한글 언어 전환
- [x] 프로필 섹션
- [x] 논문 목록 (이미지 포함)
- [x] 프로젝트 섹션
- [x] 갤러리 (라이트박스)
- [x] Admin Panel (콘텐츠 관리)
- [x] GitHub 연동
- [x] Netlify 자동 배포
- [x] 커스텀 도메인 (www.myungsungkim.com)
- [x] HTTPS/SSL 인증서

### 🔨 진행 중

- [ ] CV 데이터를 실제 콘텐츠로 반영
- [ ] content.json 자동 렌더링
- [ ] Admin Panel 보안 강화

### 📋 예정

- [ ] Google Scholar 자동 연동
- [ ] 블로그 섹션
- [ ] SEO 최적화

---

## 🚀 배포 주소

- **Production**: https://www.myungsungkim.com
- **Admin Panel**: https://www.myungsungkim.com/admin.html
- **GitHub Repo**: https://github.com/yourusername/myungsungkim-website

---

## 🏆 성공 체크리스트

웹사이트 배포를 완료하셨나요? 다음을 확인하세요:

- [ ] ✅ GitHub에 코드 업로드 완료
- [ ] ✅ Netlify 배포 성공
- [ ] ✅ www.myungsungkim.com 접속 가능
- [ ] ✅ HTTPS 작동 (자물쇠 아이콘)
- [ ] ✅ 모바일에서도 잘 보임
- [ ] ✅ 언어 전환 작동
- [ ] ✅ Admin Panel 접속 가능
- [ ] ✅ 이미지가 모두 표시됨
- [ ] ✅ 링크들이 정상 작동

**🎊 축하합니다! 이제 전 세계에 당신의 연구를 공유할 수 있습니다!**

---

**마지막 업데이트**: 2026년 4월 8일  
**버전**: 1.0.0  
**상태**: ✅ Production Ready

---

## 🆘 처음 시작하시나요?

1. 📖 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) 읽기 (GitHub & Netlify 설정)
2. 🎨 [ADMIN_GUIDE.md](ADMIN_GUIDE.md) 읽기 (콘텐츠 관리 방법)
3. 💬 질문이 있으면 GitHub 이슈로 문의하기

**Let's build something amazing! 🚀**

### Why This Site is CMS-Ready

All text content uses `data-en` and `data-ko` attributes:

```html
<h2 data-en="Publications" data-ko="논문">Publications</h2>
<p data-en="English text" data-ko="한글 텍스트">English text</p>
```

This structure makes it **extremely easy** to connect a Content Management System (CMS).

---

## 🎛️ Admin Panel Integration Options

### Option 1: **Simple JSON-Based CMS** (Recommended for beginners)

Create a `content.json` file:

```json
{
  "name": {
    "en": "Myungsung Kim",
    "ko": "김명성"
  },
  "bio": {
    "en": "I am a researcher...",
    "ko": "저는 연구자..."
  },
  "publications": [
    {
      "title": "Paper Title",
      "summary": {
        "en": "English summary",
        "ko": "한글 요약"
      },
      "image": "https://...",
      "authors": "Author List",
      "venue": "Journal, Year",
      "links": [
        {"text": "Paper", "url": "https://..."}
      ]
    }
  ]
}
```

Then create `admin.html`:

```html
<!-- Simple form to edit content.json -->
<form id="contentEditor">
    <label>Name (EN): <input name="name_en"></label>
    <label>Name (KO): <input name="name_ko"></label>
    <button onclick="saveToJSON()">Save</button>
</form>
```

### Option 2: **Decap CMS** (Formerly Netlify CMS)

1. Install Decap CMS:

```yaml
# Create: admin/config.yml
backend:
  name: git-gateway
  branch: main

collections:
  - name: "publications"
    label: "Publications"
    folder: "content/publications"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Summary (EN)", name: "summary_en", widget: "text"}
      - {label: "Summary (KO)", name: "summary_ko", widget: "text"}
      - {label: "Image", name: "image", widget: "image"}
```

2. Access admin panel at: `yoursite.com/admin`

### Option 3: **Strapi Headless CMS**

1. Install Strapi locally:

```bash
npx create-strapi-app@latest my-cms --quickstart
```

2. Create content types in Strapi admin
3. Use Strapi API to fetch/update content:

```javascript
// In main.js
async function loadPublications() {
    const res = await fetch('http://localhost:1337/api/publications');
    const data = await res.json();
    renderPublications(data);
}
```

### Option 4: **WordPress REST API**

1. Install WordPress
2. Create custom post types for publications
3. Use WordPress REST API:

```javascript
fetch('https://yourwordpress.com/wp-json/wp/v2/publications')
    .then(res => res.json())
    .then(data => renderPublications(data));
```

---

## 🛠️ JavaScript Helper Functions

The site includes helper functions for programmatic updates:

```javascript
// Update any bilingual text
updateTextContent('.name', 'Myungsung Kim', '김명성');

// Add new publication
addPublication({
    image: 'https://...',
    badge: 'First Author',
    title: 'Paper Title',
    summaryEn: 'English summary',
    summaryKo: '한글 요약',
    venue: 'Journal, 2026',
    authors: 'Author List',
    links: [
        {text: 'Paper', url: 'https://...'}
    ]
});

// Add gallery image
addGalleryImage(
    'https://image-url.jpg',
    'English caption',
    '한글 캡션'
);
```

---

## 📱 Browser Compatibility

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 🌐 Language Toggle Feature

### How It Works

1. Click "한국어" button (top-right) → All text switches to Korean
2. Click "English" button → All text switches back to English
3. Language preference is saved in browser localStorage

### Adding New Bilingual Content

Always include both `data-en` and `data-ko`:

```html
<p data-en="Hello" data-ko="안녕하세요">Hello</p>
```

The JavaScript automatically updates all elements when language is toggled.

---

## 🎯 SEO Optimization

### Current Meta Tags

```html
<title>Myungsung Kim - Researcher in Digital Mental Health & XR</title>
<meta name="description" content="PhD candidate at UNIST...">
```

### Recommended Additions

Add to `<head>` in `index.html`:

```html
<!-- Open Graph for social media -->
<meta property="og:title" content="Myungsung Kim - Researcher">
<meta property="og:description" content="...">
<meta property="og:image" content="https://your-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Myungsung Kim">
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics

Add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="yourdomain.com" 
        src="https://plausible.io/js/script.js"></script>
```

---

## 🔒 Security Notes

- No backend = No security vulnerabilities
- All content is static HTML
- Safe to host anywhere
- No database, no server-side code
- HTTPS automatically provided by Vercel/Netlify/GitHub Pages

---

## 🤝 Future Enhancements

### Short-term
- [ ] Add CV PDF download
- [ ] Connect real publication images
- [ ] Add actual gallery photos
- [ ] Implement search functionality

### Long-term
- [ ] Build admin panel for content editing
- [ ] Add blog section
- [ ] Integrate with Google Scholar API
- [ ] Add RSS feed for publications

---

## 📞 Support & Questions

For questions about:
- **Website structure**: Check this README
- **Design customization**: Edit `css/style.css`
- **Content updates**: Edit `index.html`
- **CMS integration**: See "Admin Panel Integration Options" above

---

## 📝 License

This website template is free to use for personal academic websites.

---

## 🎉 Credits

- **Design Inspiration**: [daehwakim.com](https://daehwakim.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Crimson Text)
- **Developer**: Built for Myungsung Kim's academic portfolio

---

## 🚀 Next Steps

1. ✅ **Review the site**: Open `index.html` in browser
2. ✅ **Update content**: Replace placeholder text with your info
3. ✅ **Add images**: Upload your photos and update URLs
4. ✅ **Test language toggle**: Click the language button
5. ✅ **Deploy**: Choose Vercel, Netlify, or GitHub Pages
6. ⏳ **Set up admin panel** (optional): Follow CMS integration guide

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready

For technical assistance, refer to the inline comments in `index.html`, `style.css`, and `main.js`.
