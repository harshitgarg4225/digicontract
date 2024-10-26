// src/components/VideoSection.jsx
import React from 'react';

function VideoSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text">How DigiContract Works</h2>
        <p className="mt-4 text-text">
          Watch this short video to learn how easy it is to create digital rental agreements.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-full sm:w-2/3 lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="DigiContract Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
