# CraftBridge - Connect with Master Craftspeople

## Project Overview
CraftBridge is a platform that bridges the gap between traditional craftspeople and eager learners worldwide. It enables master artisans to share their knowledge through interactive virtual workshops while providing craft enthusiasts access to authentic, traditional crafting techniques. The platform preserves and promotes traditional crafts by making them accessible to a global audience.

## Key Features & Technologies

### Core Features
- Interactive virtual workshops with real-time instruction
- User authentication and profile management
- Workshop registration and scheduling system
- Comprehensive workshop categorization (Woodworking, Metalwork, Textiles, Ceramics)
- Workshop host dashboard for craftspeople
- Detailed workshop resources and materials management

### Technologies Used
- **Frontend**: Next.js, React, TailwindCSS
- **Authentication**: Local storage-based auth system
- **Styling**: Responsive design with Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Next.js built-in routing
- **Icons**: Heroicons

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd knowledge-transfer
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Application Structure

```
knowledge-transfer/
├── pages/              # Next.js pages
│   ├── auth/          # Authentication pages
│   ├── workshop/      # Workshop-related pages
│   └── index.tsx      # Homepage
├── components/        # Reusable React components
├── public/           # Static assets
│   └── images/       # Image assets
└── styles/          # Global styles
```

## Deployed Application
The application is deployed at: [Add your deployment URL here]

## Additional Resources
For large files, documentation, and additional resources, please visit: [Add your Google Drive link here]

## Testing
To run the test suite:
```bash
npm run test
# or
yarn test
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details. 