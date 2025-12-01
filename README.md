# AMP NGO Portal (V1)

A comprehensive mobile application designed for the Association of Muslim Professionals (AMP) to foster collaboration and information exchange within the non-profit sector. This portal connects NGOs, volunteers, and donors, enabling them to share resources, manage events, and showcase projects.

## 📱 Features

- **User Journeys**: Tailored experiences for NGOs, Volunteers, and Donors.
- **Authentication**: Secure Login and Registration flows (Optional for browsing content).
- **NGO Directory**: Search and view detailed profiles of registered NGOs.
- **Projects & Events**: Browse ongoing projects and upcoming events.
- **Resource Center**: Access valuable resources and documents.
- **Responsive Design**: Optimized for various screen sizes to ensure a consistent experience.

## 🛠 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 54)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **Styling**: StyleSheet & Flexbox

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (LTS version recommended): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Expo Go** app on your physical device (available on App Store and Google Play) or an Android/iOS Emulator.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd AMP-NGO-Portal-V1
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the App

1.  **Start the development server:**
    ```bash
    npx expo start
    ```

2.  **Open the app:**
    -   **On physical device**: Scan the QR code displayed in the terminal using the **Expo Go** app (Android) or the Camera app (iOS).
    -   **On Emulator**: Press `a` for Android emulator or `i` for iOS simulator (macOS only).
    -   **On Web**: Press `w` to run in the browser.

## 📂 Project Structure

The source code is located in the `src` folder:

```
src/
├── components/    # Reusable UI components (Button, Input, Cards, etc.)
├── navigation/    # Navigation configuration (AppNavigator)
├── screens/       # Application screens (Home, Login, Projects, Events, etc.)
├── theme/         # Global styling constants (colors, fonts)
└── types/         # TypeScript type definitions
```

## 🔧 Troubleshooting

-   **Cache Issues**: If you encounter unexpected errors, try clearing the Metro bundler cache:
    ```bash
    npx expo start --clear
    ```
-   **Dependency Issues**: If installation fails, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
