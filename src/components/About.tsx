import React from 'react';
import { Shield, Book, School, User } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About The Project
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Academic Capstone Project in Cybersecurity
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <School className="h-5 w-5 text-cyan-500" />
                  Institution
                </h4>
                <p className="text-gray-300">
                  Vellore Institute of Technology, Andhra Pradesh (VITAP)
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-cyan-500" />
                  Faculty Mentor
                </h4>
                <p className="text-gray-300">
                  Prof. Sibi Chakravarty
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Development Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white">Vignesh</h4>
                <p className="text-gray-400">Project Lead & Designer</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white">Suneel</h4>
                <p className="text-gray-400">Security Researcher & Developer</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white">Jagadish</h4>
                <p className="text-gray-400">Frontend Developer</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white">Yatish</h4>
                <p className="text-gray-400">Developer & Tester</p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Book className="h-5 w-5 text-cyan-500" />
                Project Overview
              </h4>
              <p className="text-gray-300 mb-4">
                This project represents a comprehensive academic endeavor in cybersecurity, developed as a capstone project at VITAP. It demonstrates practical application of security concepts through automated attack surface analysis and vulnerability assessment.
              </p>
              <p className="text-gray-300">
                The platform integrates multiple security modules to provide a holistic approach to cybersecurity assessment, making it valuable for both educational purposes and practical security testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}