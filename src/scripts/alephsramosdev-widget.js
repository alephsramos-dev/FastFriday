/**
 * AlephSRamosDev Widget
 * Widget universal para assinatura de rodapé
 * Compatível com: HTML puro, React, Next.js, Vue, etc.
 */

(function() {
    // Injeta o link da fonte Urbanist se ainda não existir
    function loadFont() {
        if (!document.querySelector('link[href*="Urbanist"]')) {
            const preconnect1 = document.createElement('link');
            preconnect1.rel = 'preconnect';
            preconnect1.href = 'https://fonts.googleapis.com';
            document.head.appendChild(preconnect1);

            const preconnect2 = document.createElement('link');
            preconnect2.rel = 'preconnect';
            preconnect2.href = 'https://fonts.gstatic.com';
            preconnect2.crossOrigin = 'anonymous';
            document.head.appendChild(preconnect2);

            const fontLink = document.createElement('link');
            fontLink.rel = 'stylesheet';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Urbanist:ital@1&display=swap';
            document.head.appendChild(fontLink);
        }
    }

    // Injeta o CSS do widget se ainda não existir
    function loadCSS() {
        if (!document.querySelector('#alephsramosdev-widget-css')) {
            const link = document.createElement('link');
            link.id = 'alephsramosdev-widget-css';
            link.rel = 'stylesheet';
            link.href = 'alephsramosdev-widget.css';
            document.head.appendChild(link);
        }
    }

    // Função para criar o widget
    window.createAlephsramosdevWidget = function(options) {
        options = options || {};
        const utmSource = options.utmSource || 'fast-friday';
        const utmMedium = options.utmMedium || 'footer';
        const utmCampaign = options.utmCampaign || 'unitycompany';

        const widget = document.createElement('p');
        widget.className = 'alephsramosdev-widget';

        const link = document.createElement('a');
        link.href = `https://www.alephsramosdev.com.br?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        const img = document.createElement('img');
        img.src = 'https://www.alephsramosdev.com.br/alephsramosdev-icon.png';
        img.alt = 'project-by-alephsramosdev';
        img.loading = 'eager';

        const text = document.createTextNode('@alephsramosdev');

        link.appendChild(img);
        link.appendChild(text);
        widget.appendChild(link);

        return widget;
    };

    // Auto-inicialização para HTML puro
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadFont();
            loadCSS();
        });
    } else {
        loadFont();
        loadCSS();
    }
})();
