/*
Copyright amir javanmir
Released on: June 24, 2025
*/
(function (params) {
    let defineLibrary = () => ({
        init: function (galleryID) {
            const container = document.querySelector(galleryID);
            if (!container) {
                console.error("please add the correct element!");
                return;
            }
            const firstImage = container.querySelector(".small-preview");
            const zomedImage = container.querySelector(".zoomed-image");
            if (!firstImage || !zomedImage) {
                console.error("please add .small-preview and .zoomed-image tag");
                return;
            }
            zomedImage.style.backgroundImage = `url(${firstImage.src})`;
            zomedImage.style.backgroundSize = "cover";

            container.addEventListener("click", function(e){
                let elem = e.target;
                if(elem.classList.contains("small-preview")){
                    zomedImage.style.backgroundImage = `url(${elem.src})`;
                }
            });

            zomedImage.addEventListener("mouseenter", function(){
                this.style.backgroundSize = "250%";
            })

            zomedImage.addEventListener("mousemove", function(e){
                let dimension = this.getBoundingClientRect();
                let x = Math.round(Math.round(e.clientX - dimension.left) / Math.round(dimension.width) * 100);
                let y = Math.round(Math.round(e.clientY - dimension.top) / Math.round(dimension.width) * 100);

                this.style.backgroundPosition = `${x}% ${y}%`;
            });

            zomedImage.addEventListener("mouseleave", function(e){                
                this.style.backgroundSize = "cover";
                this.style.backgroundPosition = "center";
            });
        }
    });
    if (typeof (zoomGallery) == 'undefined') {
        params.zoomGallery = defineLibrary();
    } else {
        console.log('Library already defined!');
    }
})(window)