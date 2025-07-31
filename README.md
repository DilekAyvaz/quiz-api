# 🎯 Quiz API

Modern web development prensiplerini takip ederek geliştirilmiş, öğrencilerin quiz sorularına cevap verip skor kazanabilecekleri RESTful API sistemi.

## 🚀 Özellikler

- ✅ **User Authentication** - JWT tabanlı güvenli giriş sistemi
- ✅ **Question Management** - Quiz soruları yönetimi
- ✅ **Answer Submission** - Cevap gönderme ve doğrulama
- ✅ **Score Tracking** - Kullanıcı skor takibi
- ✅ **Role-Based Access** - Öğrenci, öğretmen, admin rolleri
- ✅ **Error Handling** - Kapsamlı hata yönetimi
- ✅ **Database Migrations** - Prisma ile versiyon kontrolü

## 🛠️ Teknolojiler

- **Backend**: Node.js, Express.js 5.1.0
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: JWT, bcrypt
- **Development**: dotenv, CORS

## 📁 Proje Yapısı

```
quiz-api/
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── migrations/        # Database migrations
│   └── seed.js           # Seed data
├── src/
│   ├── controllers/       # Business logic
│   ├── models/           # Database operations
│   ├── routes/           # API endpoints
│   ├── middlewares/      # Request processing
│   ├── utils/            # Helper functions
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
├── package.json
└── README.md
```

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- PostgreSQL
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
   ```bash
   git clone <repository-url>
   cd quiz-api
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Environment variables'ları ayarlayın**
   ```bash
   cp .env.example .env
   ```
   
   `.env` dosyasını düzenleyin:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/quiz_db"
   JWT_SECRET="your-secret-key"
   PORT=3000
   ```

4. **Database'i kurun**
   ```bash
   npx prisma migrate dev
   ```

5. **Seed data'yı yükleyin (opsiyonel)**
   ```bash
   npm run seed
   ```

6. **Uygulamayı başlatın**
   ```bash
   npm run dev
   ```

## 📚 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Kullanıcı kaydı |
| POST | `/api/login` | Kullanıcı girişi |

### Questions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/questions` | Tüm soruları getir |
| GET | `/api/questions/random` | Rastgele soru getir |

### Answers

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/answer` | Cevap gönder | ✅ |
| GET | `/api/score` | Kullanıcı skorunu getir | ✅ |

## 🔐 Authentication

API'de JWT tabanlı authentication kullanılmaktadır.

### Register
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Login
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Protected Routes
```bash
curl -X GET http://localhost:3000/api/score \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🗄️ Database Schema

### User
```sql
- id: Int (Primary Key)
- email: String (Unique)
- password: String (Hashed)
- role: Role (STUDENT/TEACHER/ADMIN)
- createdAt: DateTime
```

### Question
```sql
- id: Int (Primary Key)
- content: String (Unique)
- answer: String
- createdAt: DateTime
- deletedAt: DateTime? (Soft Delete)
```

### Answer
```sql
- id: Int (Primary Key)
- userId: Int (Foreign Key)
- questionId: Int (Foreign Key)
- isTrue: Boolean
```

## 🏗️ Mimari Prensipleri

### Separation of Concerns
- **Controllers**: HTTP request/response handling
- **Models**: Database operations
- **Routes**: API endpoint definitions
- **Middlewares**: Request processing

### Single Responsibility Principle
- Her dosya tek bir sorumluluğa sahip
- Modüler ve maintainable kod yapısı

### Error Handling
- Global error handler
- Prisma, JWT, validation hataları
- Tutarlı error response formatı

## 🔧 Development

### Scripts
```bash
npm run dev      # Development server
npm run seed     # Seed database
npm test         # Run tests (gelecekte)
```

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: JWT signing secret
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## 🚨 Error Handling

API, tutarlı error response formatı kullanır:

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "statusCode": 400,
    "message": "Detailed error message"
  }
}
```

### Hata Kodları
- `P2002`: Duplicate field error
- `P2025`: Record not found
- `JsonWebTokenError`: Invalid token
- `TokenExpiredError`: Expired token

## 🔒 Güvenlik

- **Password Hashing**: bcrypt ile güvenli şifre saklama
- **JWT Authentication**: Stateless authentication
- **Input Validation**: Request data kontrolü
- **CORS**: Cross-origin request handling
- **Environment Variables**: Güvenli config yönetimi

## 📈 Gelecek Özellikler

- [ ] Question creation (teacher role)
- [ ] Advanced analytics
- [ ] Leaderboards
- [ ] Question categories
- [ ] Time-based quizzes
- [ ] Mobile app integration

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

Bu proje modern web development prensiplerini takip ederek geliştirilmiştir. Clean architecture, separation of concerns ve best practices uygulanmıştır.

---

**Quiz API** - Eğitim teknolojileri için güçlü backend sistemi 🎓 