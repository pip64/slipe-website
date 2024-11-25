#include <vulkan/vulkan.h>
#include <stdio.h>

#define ALLOCATOR NULL

int main() {
    VkInstance instance;

    VkApplicationInfo appInfo = {
        .sType = VK_STRUCTURE_TYPE_APPLICATION_INFO,
        .pApplicationName = "Test",
        .apiVersion = VK_API_VERSION_1_0
    };

    VkInstanceCreateInfo instanceInfo = {
        .sType = VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO,
        .pApplicationInfo = &appInfo,
        .enabledExtensionCount = 0,
        .ppEnabledExtensionNames = NULL
    };

    if (vkCreateInstance(&instanceInfo, ALLOCATOR, &instance) != VK_SUCCESS) {
        printf("[RenderSystem] Vulkan initialization failed.\n");
        return -1;
    }

    printf("[RenderSystem] Vulkan instance created.\n");

    vkDestroyInstance(instance, ALLOCATOR);
    printf("[RenderSystem] Vulkan instance destroyed.\n");
    return 0;
}
